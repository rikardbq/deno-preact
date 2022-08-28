import { HandlerContext } from "fresh/server.ts";

import { getQueryParams } from "../../util.ts";

export const handler = (req: Request, _ctx: HandlerContext): Response => {

  const song = getQueryParams(req.url).get("song");
  
  const body = song;
  return new Response(body);
};
