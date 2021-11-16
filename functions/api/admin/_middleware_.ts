export const onRequest = async ({ request, next }) => {
  if (request.headers.get("X-admin")) {
    return await next();
  } else {
    return new Response("Bad");
  }
};
