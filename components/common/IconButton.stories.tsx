import React from "react";

import { Meta, Story } from "@storybook/react";
import { IconButtonProps, IconButton } from "./IconButton";

export default {
  title: "Common/IconButton",
  component: IconButton,
  argTypes: {},
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
};
