import { jsonResponse } from "../../utils/jsonResponse";

export const onRequestPost = async ({ request, env }) => {
  let accountId: string;

  try {
    accountId = (await request.json()).accountId;
  } catch {
    return jsonResponse(
      { error: "Could not parse account ID." },
      { status: 400 }
    );
  }

  try {
    const { apiToken } = await env.KV.get("setup", "json");
    await env.KV.put("setup", JSON.stringify({ apiToken, accountId }));
    return jsonResponse(true);
  } catch (thrown) {
    return jsonResponse({ error: `Could not select account: ${thrown}` });
  }
};
