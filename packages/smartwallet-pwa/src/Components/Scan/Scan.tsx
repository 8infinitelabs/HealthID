import { useState, useEffect, useRef, MutableRefObject, useContext } from "react";
import { Grid, Button, makeStyles, useMediaQuery } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import io, { Socket } from "socket.io-client";
import toast from 'react-hot-toast';
import ScanHandler from "./ScanHandler";
import IconLeft from "../../Assets/svg/IconLeft";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import AppContext from "../../AppContext";

// @ts-ignore
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    top: "auto",
    bottom: 0,
  },
  contentMenu: {
    background: "#272727",
    display: "flex",
    width: "100%",
  },
  button: {
    margin: "20px 50px !important",
    textAlign: "center !important",
    borderRadius: "4px !important",
    fontSize: "14px !important",
    fontWeight: 600,
    textTransform: "none !important",
    padding: "12px 31px 14px !important",
    background: "#03DAC5 !important",
    color: "#fff !important",
    cursor: "pointer !important",
    "@media screen and (max-width: 800px)": {
      textAlign: "center !important",
      margin: "20px 10px !important",
      borderRadius: "4px !important",
      fontSize: "12px !important",
      fontWeight: 600,
      padding: "12px 15px 14px !important",
      background: "#03DAC5 !immportant",
      color: "#fff !important",
      cursor: "pointer",
    },
    "&:hover": {
      opacity: ".8",
      boxShadow: "none",
    },
  },
}));

const Scan = () => {
  const classes: any = useStyles();
  const [display, setDisplay] = useState(true);
  const matches = useMediaQuery("(min-width:600px)");
  const history = useHistory();
  const { socket } = useContext<any>(AppContext);
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/documents");
    } else {
      history.goBack();
    }
  };

  const handleClick = () => {
    if (display === matches) {
      return setDisplay(!display);
    } else {
      return toast("Set the size of your browser smaller to use the scan", {
        duration: 6000,
      });
    }
  };

  return (
    <>
      <div
        className={classes.contentMenu}
        style={{ display: display ? "none" : "flex" }}
      >
        <div
          onClick={handleReturn}
          style={{ marginTop: "17px", marginRight: "12px", cursor: "pointer" }}
        >
          <IconLeft />
        </div>

        <h1 style={{ color: "#ffff", fontSize: "2.2rem" }}>Return</h1>
      </div>
      <Grid
        style={{
          marginTop: display ? "0px" : "30px",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
        container
        justifyContent="center"
      >
        <Grid container justifyContent="center">
          <Button
            style={{ display: display ? "none" : "block" }}
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={handleClick}
          >
            Read Qr Code
          </Button>

          <ScanHandler socket={socket} display={display} />
        </Grid>
      </Grid>
    </>
  );
};
export default Scan;
