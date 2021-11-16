export const jsonResponse = (payload: any, init: ResponseInit = {}) =>
  new Response(JSON.stringify(payload), {
    headers: { "Content-Type": "application/json", ...init.headers },
    ...init,
  });
