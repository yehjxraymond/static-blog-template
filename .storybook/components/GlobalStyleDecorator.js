import React from "react";

const GlobalStyleDecorator = storyFn => (
  <>
    <link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css" crossOrigin="anonymous" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
      crossOrigin="anonymous"
    />
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="anonymous" />
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin="anonymous" />
    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="anonymous" />
    <div style={{ padding: "1rem" }}>{storyFn()}</div>
  </>
);

export default GlobalStyleDecorator;
