export const getQueryParams = (url: string) => {
    const params = url.split("?");
    return new URLSearchParams(params[1]);
}
