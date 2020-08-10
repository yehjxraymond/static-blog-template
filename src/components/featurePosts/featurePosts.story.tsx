import React from "react";
import { storiesOf } from "@storybook/react";
import { FeaturePosts, FeaturePost } from "./featurePosts";

const story = storiesOf("Components|Home", module);

const sample: FeaturePost = {
  title: "Boost your conversion rate",
  summary:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  img:
    "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  imgAlt: "",
  href: "#",
  tags: [
    {
      label: "#finance",
      href: "/tags/finance",
    },
    {
      label: "#leadership",
      href: "/tags/leadership",
    },
    {
      label: "#opinion",
      href: "/tags/opinion",
    },
    {
      label: "#blockchain",
      href: "/tags/blockchain",
    },
  ],
};

story.add("FeaturePosts", () => (
  <FeaturePosts featurePosts={[sample, sample, sample, sample]} />
));
