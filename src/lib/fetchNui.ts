import axios from "axios";
import { close } from "../App";

export function fetchNui(action: string, args: any) {
  const response = args || "none";
  axios.post("https://endpoint/" + action, JSON.stringify(response)).then((data: any) => {
    if (data.data.close) close();
  });
}