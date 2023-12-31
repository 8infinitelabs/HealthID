import { useState } from "react";
import { useStyles } from "../styled";
import { useSelector } from "react-redux";
import Link from "../../Link";
import IconLeft from "../../../Assets/svg/IconLeft";
import { useHistory, useParams } from "react-router-dom";
import MonconImg from "../../../Assets/img/MonconImg";

const DemoDinamycs = () => {

  const classes = useStyles();
  const history = useHistory();
  const dynamycFields = useSelector((state: any) => state.store.dynamicFields);
  const { fieldId } = useParams<{ fieldId: string | undefined }>();
  const field = dynamycFields.find((field: any) => field.id === fieldId);
  const [data, setData] = useState(JSON.parse(localStorage.getItem(`credential_${fieldId}`) as string));


  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/documents");
    } else {
      history.goBack();
    }
  };

  return (
    <>
      <div className={classes.contentMenu}>
        <div
          onClick={handleReturn}
          style={{ marginTop: "10px", marginRight: "15px", cursor: "pointer" }}
        >
          <IconLeft />
        </div>

        <h1 style={{ color: "#ffff" }}>Proof Of ID Credential Demo</h1>
      </div>

      <h1 className={classes.titleH1}>Issued by</h1>
      <div style={{ marginTop: "15px" }}>
        <div className={classes.proofContainerWhite}>
          <div className={classes.fabWhite}>
            <MonconImg />
          </div>
          <div>
            <div className={classes.issuedSubtitle}>{field.id}</div>
            <Link
              to="https://moncon.co/"
              target={"_blank"}
              className={classes.link}
            >
              https://moncon.co/
            </Link>
          </div>
        </div>
      </div>

      <h1 className={classes.titleH1}>Document details/claims</h1>
      <div
        style={{ marginTop: "15px" }}
        className={classes.documentDetailsContainer}
      >
        <div>
          <div style={{ marginLeft: "20px" }}>
            <div className={classes.documentsSubtitle}>Message</div>
            <p className={classes.documentsMessage}>{field.value}</p>
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: "15px",marginBottom: "60px" }}
        className={classes.documentDetailsContainer}
      >
        <div>
          <div style={{ marginLeft: "20px", paddingRight:"30px" }}>
            <div className={classes.documentsSubtitle}>sawtooth w3c credential transaction id</div>
            <p className={classes.documentsMessage}>{data.myTag}</p>
          </div>
        </div>
      </div>

    </>
  );
};
export default DemoDinamycs;
