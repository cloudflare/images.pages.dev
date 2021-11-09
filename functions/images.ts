export const onRequestGet = async () => {
  return new Response(
    JSON.stringify([
      {
        id: "greg",
      },
    ]),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
