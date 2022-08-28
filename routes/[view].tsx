import { PageProps } from "fresh/server.ts";
import Views from "../components/views/index.ts";

export default (props: PageProps) => {
  return Views[props.params.view];
};
