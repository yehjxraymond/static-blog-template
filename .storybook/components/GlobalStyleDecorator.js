import React from "react";
import "../../static/css/index.css";

const GlobalStyleDecorator = (storyFn) => (
  <>
    <script
      src="https://unpkg.com/react/umd/react.production.min.js"
      crossOrigin="anonymous"
    />
    <script
      src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
      crossOrigin="anonymous"
    />
    <script
      src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossOrigin="anonymous"
    />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    <div style={{ padding: "1rem" }}>{storyFn()}</div>
  </>
);

export default GlobalStyleDecorator;
