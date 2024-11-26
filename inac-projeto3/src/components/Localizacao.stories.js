import React from "react";
import Localizacao from "./Localizacao";

export default {
  title: "Components/Localizacao",
  component: Localizacao,
};

const Template = (args) => <Localizacao {...args} />;

export const Default = Template.bind({});
Default.args = {};
