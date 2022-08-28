export const __projectdir = new URL(".", import.meta.url).pathname;

export const getQueryParams = (url: string) => {
  const params = url.split("?");
  return new URLSearchParams(params[1]);
};

export const streamSong = async (req: Request, song: string) => {
  const range = req.headers.get("range") ?? "bytes=0-";
  const parts = range.replace(/bytes=/, "").split("-");

  try {
    const file = await Deno.open(`${__projectdir}static/audio/${song}.mp3`, {
      read: true,
    });
    const stat = file.statSync();
    const start = parseInt(parts[0]);
    const end = parts[1] ? parseInt(parts[1]) : stat.size - 1;
    const chunk = end - start + 1;

    await file.seek(start, Deno.SeekMode.Start);

    return {
      status: 206,
      headers: new Headers({
        "Content-Type": "audio/mpeg",
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Content-Length": `${chunk}`,
        "Accept-Ranges": "bytes",
      }),
      body: file.readable,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
