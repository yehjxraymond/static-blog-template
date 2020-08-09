import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./button";

const story = storiesOf("Components|Button", module);

story.add("SampleButton", () => <Button />);
