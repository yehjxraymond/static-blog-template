import React from "react";
import { storiesOf } from "@storybook/react";
import { Footer } from "./footer";

const story = storiesOf("Components|Layout", module);

const data: Footer = {
  copyrightOwner: "Geek SG",
  facebook: "https://geek.sg/",
  instagram: "https://geek.sg/",
  twitter: "https://geek.sg/",
  github: "https://geek.sg/",
  dribble: "https://geek.sg/",
  linkedin: "https://geek.sg/",
};

story.add("Footer", () => <Footer {...data} />);
