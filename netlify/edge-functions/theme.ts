import type { Context } from "https://edge.netlify.com/";
import {
  HTMLRewriter,
  Element,
} from "https://raw.githubusercontent.com/worker-tools/html-rewriter/master/index.ts";

export default async (request: Request, context: Context) => {
  const res = await context.next();
  const type = res.headers.get("content-type") as string;
  if (!type.startsWith("text/html")) {
    return;
  }

  const url = new URL(request.url);
  console.log(url.search);

  if (url.searchParams.has("theme")) {
    const availableThemes = ["dark", "light"];

    const requestedTheme = url.searchParams.get("theme") ?? "dark";

    console.log({ requestedTheme });

    if (availableThemes.includes(requestedTheme)) {
      context.cookies.set({
        name: "theme",
        value: requestedTheme,
        path: "/",
        secure: true,
        httpOnly: true,
        sameSite: "Strict",
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      });
    }

    return new Response("Redirecting...", {
      status: 301,
      headers: {
        Location: url.pathname,
        "Cache-Control": "no-cache",
      },
    });
  }

  const theme = context.cookies.get("theme") ?? "dark";
  console.log({ theme });

  console.log(request.url);

  return new HTMLRewriter()
    .on("html", {
      element(element: Element) {
        element.setAttribute("data-theme", theme);
      },
    })
    .on(`form[id='select-${theme === "dark" ? "dark" : "light"}-theme']`, {
      element(element: Element) {
        element.remove();
      },
    })
    .transform(res);
};
