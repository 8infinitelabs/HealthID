import { useEffect, useState, useRef, useContext } from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import QRCodeStyling, { Options } from "qr-code-styling";
import SectionTitle from "../SectionTitle";
import AppContext from "../../AppContext";
import toast from "react-hot-toast";
import Editor from "../Editor/Editor";
import apiService from "../../Services/apiService";

const useStyles = makeStyles(() => ({
  marginBottom: {
    marginBottom: 20,
  },
}));

const QrCode = () => {
  const { socket, userId, setIsLoading } = useContext(AppContext);
  const [socketResponse, setSocketResponse] = useState<any>({});
  const [options, setOptions] = useState<Options>({
    width: 300,
    height: 300,
    type: "svg",
    data: JSON.stringify({
      idProvider: socket?.current?.id,
    }),
    image:
      "https://pbs.twimg.com/profile_images/1356260647642796035/qPlwhss9_400x400.jpg",
    dotsOptions: { type: "classy", color: "#6a1a4c" },
    cornersSquareOptions: { type: "extra-rounded", color: "#000000" },
    backgroundOptions: {
      color: "#e9ebee",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 20,
    },
  })
  const [request, setRequest] = useState<{
    content: { blocks: any[] },
    isSensitiveContent: false,
  }>({
    content: { blocks: [] },
    isSensitiveContent: false,
  });

  const [error, setError] = useState({
    content: false,
    image: false,
  });

  const [qrCode] = useState<QRCodeStyling>(new QRCodeStyling(options));
  const ref = useRef<HTMLDivElement>(null);
  const classes: any = useStyles();
  console.log({ idProvider: socket?.current?.id });

  const sendReport = async () => {
    try {
      setIsLoading(true);

      const body = {
        isSensitiveContent: request.isSensitiveContent,
        content: request.content,
      };

      const response = await apiService.post('/issuer/report', body);
      return response.data;
    } catch (err) {
      console.error(err);
      toast.error('An error has occurred');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handshake = (data: any) => {
      console.log(data)
      const newData = { ...socketResponse, data };
      setSocketResponse(newData);
      toast("initiating handshake");
      socket?.current?.emit("finishHandshake", { ...newData, issuerId: userId });
    };

    if (!!socket?.current) {
      socket.current.on(
        "handshake",
        handshake
      );
    }

    return () => {
      socket?.current?.off(
        "handshake",
        handshake
      );
    };
  }, [socket]);

  useEffect(() => {
    let data = JSON.parse(options?.data as string);
    if (data.idProvider !== socket?.current?.id) {
      data.idProvider = socket?.current?.id;
      console.log({ idProvider: socket?.current?.id });
      setOptions({ ...options, data: JSON.stringify(data) });
    }
  }, [socket]);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [ref, qrCode]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode.update(options);
  }, [qrCode, options]);

  return (
    <>
      <SectionTitle title="QrCode" />
      <Grid container spacing={3} className={classes.marginBottom}>
        <div ref={ref}></div>
      </Grid>
      {Boolean(socketResponse!.idProvider) && (
        <>
          <SectionTitle title="Editor" />
          <Grid container spacing={3} className={classes.marginBottom}>
            <div style={{ width: "100%" }} >
              <Editor
                onUpdate={setRequest}
                defaultData={request}
                setError={setError}
                error={error}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={sendReport}
            >
              send data
            </Button>
          </Grid>
        </>
      )}
    </>
  );
};

export default QrCode;
