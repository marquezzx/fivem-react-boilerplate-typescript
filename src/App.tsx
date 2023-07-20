import { useEffect, useState } from "react";
import axios from "axios";
import { GlobalStyle } from "./GlobalStyle";
import { Menu } from "./components/Menu/Menu";

interface EventData {
  show: boolean
}
const [clientData, setClientData] = useState<EventData>({
  show: true,
});
export function close() {
  axios.post("https://endpoint/removeFocus").then((data: any) => {
    if (data.data.close) setClientData((prevState: any) => ({ ...prevState, show: false }));
  });
}
export default function App() {
  useEffect(() => {
    const eventListener = ({ data }: { data: EventData }) => {
      if (data.show) {
        setClientData({
          ...clientData,
          show: data.show,
        });
      }
    };
    //@ts-ignore
    const handleKeyDown = ({ keyCode }) => {
      if (keyCode === 27) close();
    };

    window.addEventListener("message", eventListener);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("message", eventListener);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <>
    <GlobalStyle/>
    {clientData.show ? <Menu data={clientData}/> : ""}
  </>;
}