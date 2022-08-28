/** @jsx h */
import { h, Fragment } from "preact";

export default () => {
  return (
    <Fragment>
      <main>
        <h2>Welcome to Music route!</h2>
        <p>You can do this, I believe in you.</p>
        <audio src="/api/music?song=cry_of_fear_w_vampyr1_prod-iceboi" controls />
      </main>
    </Fragment>
  );
}
