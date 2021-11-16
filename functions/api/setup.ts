// Accepts `accountId` and `apiToken`.
// Automatically configures three Cloudflare Images variants (https://developers.cloudflare.com/images/variants).
// Returns `errors` (an array of strings) if there's a problem, or `true` if successful.
export const onRequestPost = async ({ request, env }) => {
  const { accountId, apiToken } = await request.json();

  const createVariant = async (payload: any): Promise<true | string> => {
    let message: string;

    try {
      const response = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1/variants`,
        {
          method: "POST",
          body: JSON.stringify({ ...payload }),
        }
      );
      const data = await response.json();
      if (data.success === true) return true;
      throw data.errors;
    } catch (e) {
      message = `Could not create ${payload.id} variant: ${e}`;
    }

    return message;
  };

  const variants = await Promise.all(variantPayloads.map(createVariant));
  const errors = variants.filter((variant) => variant !== true);
  if (errors.length > 0)
    return new Response(JSON.stringify({ errors }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });

  await env.KV.put(
    "setup",
    JSON.stringify({ apiToken, accountId, variants: true })
  );

  return new Response(null, { headers: { Location: "/" } });
};

// Returns `true` if setup has been completed.
export const onRequestGet = async ({ env }) => {
  let variants = false;
  try {
    const setup = await env.KV.get("setup", "json");
    variants = setup.variants || false;
  } catch {}

  return new Response(JSON.stringify(variants), {
    headers: { "Content-Type": "application/json" },
  });
};
