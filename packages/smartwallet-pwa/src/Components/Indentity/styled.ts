import { makeStyles } from "@material-ui/core";
// @ts-ignore
export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    boxSizing: "border-box",
    margin: "0",
    padding: "10px 130px",
    position: "relative",
    marginBottom: "4rem",
    "@media screen and (max-width: 800px)": {
      padding: 0,
    },
  },
  titleH1: {
    marginLeft: "15px",
    fontWeight: 500,
    fontSize: "2.4rem",
    lineHeight: "24px",
    marginTop: "40px",
    textAlign: "center",
    "@media screen and (max-width: 800px)": {
      marginLeft: "15px",
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: "24px",
      marginTop: "40px",
      textAlign: "left",
    },
  },

  fab: {
    boxShadow: "none !important",
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "10px",
    display: "flex",
  },
  contentPersonal: {
    margin: "0px 90px",
    marginTop: "3px",
    background: "#ffff",
    display: "flex",
    textAlign: "left",
    flexDirection: "row",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "@media screen and (max-width: 800px)": {
      margin: "0px 0px",
      marginTop: "3px",
      background: "#ffff",
      display: "flex",
      textAlign: "left",
      flexDirection: "row",
    },
  },
  titleName: {
    color: "rgba(0, 0, 0, 0,1)",
    fontWeight: 400,
    fontSize: "1.6rem",
    lineHeight: "16px",
  },
  name: {
    fontSize: "2.1rem",
    lineHeight: "24px",
    letter: "0.15px",
    fontWeight: 400,
    wordBreak: "inherit",
    color: "black !important",
    "@media screen and (max-width: 800px)": {
      fontSize: "1.6rem",
      lineHeight: "24px",
      letter: "0.15px",
    },
  },
  buttonBlue: {
    margin: "30px 550px",
    textAlign: "center",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: 600,
    padding: "12px 31px 14px",
    background: "#03DAC5",
    color: "#fff",
    cursor: "pointer",
    "@media screen and (max-width: 800px)": {
      textAlign: "center",
      margin: "30px 130px",
      borderRadius: "4px",
      fontSize: "12px",
      fontWeight: 600,
      padding: "12px 41px 14px",
      background: "#03DAC5",
      color: "#fff",
      cursor: "pointer",
    },
    "&:hover": {
      opacity: ".8",
      boxShadow: "none",
    },
  },
  check: {
    color: "#03DAC5",
    width: "60px",
    margin: "15px 80px 0px 50px",
    "@media screen and (max-width: 800px)": {
      margin: "10px 30px 0px 50px",
    },
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
  add: {
    color: "#03DAC5",
    fontSize: "1.6rem",
    "@media screen and (max-width: 800px)": {
      fontSize: "1.4rem",
    },
  },
}));
