import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Container, Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import toast from 'react-hot-toast';
import { useStyles } from "./style";
import ArrowLeft from "../../../Assets/svg/ArrowLeft";
import { credential_email } from "../../../Const";

const EditEmail = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const history = useHistory();
  const dispatchUserData = useDispatch();
  const emailValue = useSelector(
    (state: any) => state.store[credential_email].value
  );

  const handleClick = (event: any) => {
    event.preventDefault();
    let filter =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; /* eslint-disable-line */
    if (!filter.test(email)) {
      console.log(email);
    } else if (emailValue === email) {
      toast("No changes have been made", {
        duration: 2000,
      });
    } else {
      if (localStorage.hasOwnProperty(credential_email)) {
        localStorage.removeItem(credential_email);
      }
      dispatchUserData({
        type: "update",
        payload: { id: credential_email, value: email, status: false, pending:false },
      });
      setTimeout(() => {
        return history.push("/identity");
      }, 500);

      toast.success("Has been added successfully", {
        duration: 2000,
      });
    }
  };

  useEffect(() => {
    setEmail(emailValue);
  }, [emailValue]);

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/identity");
    } else {
      history.goBack();
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "20px",
          background: "#272727",
          fontWeight: 500,
        }}
      >
        <Container className={classes.root}>
          <div onClick={handleReturn} className={classes.return}>
            <ArrowLeft /> <p style={{ marginLeft: "15px" }}>Return</p>
          </div>
          <h1 className={classes.title}>Email</h1>
          <ValidatorForm
            className={classes.root}
            onSubmit={handleClick}
            noValidate
            autoComplete="off"
            onError={(errors) => console.log(errors)}
          >
            <TextValidator
              style={{ marginTop: "20px" }}
              InputProps={{
                className: classes.input,
              }}
              value={email}
              onChange={(event: any) => setEmail(event.target.value)}
              id="standard-secondary"
              label="Email"
              name="Email"
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />
            <br />
            <Button
              onClick={handleClick}
              className={classes.buttonBlue}
              variant="contained"
              color="primary"
              type="submit"
            >
              ADD DATA
            </Button>
          </ValidatorForm>
        </Container>
      </div>
    </>
  );
};
export default EditEmail;
