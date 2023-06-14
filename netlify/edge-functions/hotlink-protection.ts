import type { Context } from "<https://edge.netlify.com>";

export default async (
  request: Request,
  context: Context
): Promise<Response> => {
  const referer = request.headers.get("referer");

  // Regex to match any subdomain of connordowson.dev
  const regex = /^https?:\/\/(.*\.)?connordowson\.dev(\/.*)?$/;
  // Regex to match netlify deploy previews
  const deployPreviewRegex =
    /^https?:\/\/(.*\--)?connordowson\.netlify\.app(\/.*)?$/;

  if (!referer || !regex.test(referer) || !deployPreviewRegex.test(referer)) {
    return new Response("Forbidden", { status: 403 });
  }

  const response = await context.next();
  return response;
};
