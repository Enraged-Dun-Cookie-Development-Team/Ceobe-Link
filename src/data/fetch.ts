import DemoData from "./demo.json";
import { CeobeLinkResponse } from "./types";

const FAKE = true;

export async function fetchCeobeLinkData() {
  if (FAKE) {
    console.log("Using fake data");
    const demo: CeobeLinkResponse = {
      code: 0,
      msg: "ok",
      data: DemoData,
    };
    console.log(demo);
    return demo;
  }
  const resp: CeobeLinkResponse = await (
    await fetch("https://cdn.ceobecanteen.top/link/data")
  ).json();
  return resp;
}
