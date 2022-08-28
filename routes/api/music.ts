import { HandlerContext } from "fresh/server.ts";

import { getQueryParams, streamSong } from "../../util.ts";

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const song = getQueryParams(req.url).get("song") ?? "";
  const response = await streamSong(req, song);

  return new Response(response?.body, {
    status: response?.status,
    headers: response?.headers,
  });
};
