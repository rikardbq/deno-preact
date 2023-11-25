import { PageProps } from "fresh/server.ts";
import Views from "../components/views/index.ts";

export default (props: PageProps) => {
  return <Head>{Views[props.params.view]}</Head>;
};
