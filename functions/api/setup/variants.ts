const variantPayloads = [
  {
    id: "blurred",
    neverRequireSignedURLs: true,
    options: {
      blur: 25,
      fit: "scale-down",
      height: 360,
      metadata: "none",
      width: 360,
    },
  },
  {
    id: "preview",
    options: {
      fit: "scale-down",
      height: 360,
      metadata: "none",
      width: 360,
    },
  },
  {
    id: "highres",
    options: {
      fit: "scale-down",
      height: 2000,
      metadata: "none",
      width: 2000,
    },
  },
];

export const onRequestPost = async ({ request, env }) => {
  try {
    const setup = await env.KV.get("setup", "json");
  } catch {}

  return new Response("");
};
