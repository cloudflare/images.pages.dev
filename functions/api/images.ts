import { jsonResponse } from "../utils/jsonResponse";
import { IMAGE_KEY_PREFIX } from "../utils/constants";

export const onRequestGet: PagesFunction<{
  IMAGES: KVNamespace;
  DOWNLOAD_COUNTER: DurableObjectNamespace;
}> = async ({ request, env }) => {
  try {
    const url = new URL(request.url);
    const cursor = url.searchParams.get("cursor") || undefined;

    const kvImagesList = await env.IMAGES.list<ImageMetadata>({
      prefix: IMAGE_KEY_PREFIX,
      limit: 20,
      cursor,
    });

    const images = (
      await Promise.all(
        kvImagesList.keys.map(async (kvImage) => {
          try {
            const {
              id,
              previewURLBase,
              name,
              alt,
              uploaded,
              isPrivate,
              downloadCounterId,
            } = kvImage.metadata as ImageMetadata;

            const previewURL = `${previewURLBase}${
              isPrivate ? "blur" : "preview"
            }`;

            // TODO: Durable Object
            // const downloadCounter = env.DOWNLOAD_COUNTER.get(
            //   env.DOWNLOAD_COUNTER.idFromString(downloadCounterId)
            // );
            // // This isn't a real internet request, so the host is irrelevant (https://developers.cloudflare.com/workers/platform/compatibility-dates#durable-object-stubfetch-requires-a-full-url).
            // const downloadCountResponse = await downloadCounter.fetch("https://images.pages.dev/");
            // const downloadCount = await downloadCountResponse.json<number>();
            const downloadCount = 0;

            return {
              id,
              previewURL,
              name,
              alt,
              uploaded,
              isPrivate,
              downloadCount,
            };
          } catch {}
        })
      )
    ).filter((image) => image !== undefined);

    return jsonResponse({ images, cursor: kvImagesList.cursor });
  } catch {
    return jsonResponse({ error: "Could not list images." });
  }
};
