import React from "react";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/poppins-700-latin.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/fira-code-var-latin.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
