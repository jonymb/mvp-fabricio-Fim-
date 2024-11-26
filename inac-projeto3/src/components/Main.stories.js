import React from "react";
import Main from "./Main";

export default {
  title: "Components/Main",
  component: Main,
};

const Template = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {};
