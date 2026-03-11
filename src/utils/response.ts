export const htmlResponse = (html: string, status = 200) => {
  return new Response(html, {
    status,
    headers: {
      "Content-Type": "text/html"
    }
  });
};

export const redirect = (url: string) =>
  new Response(null, {
    status: 302,
    headers: { Location: url }
  });