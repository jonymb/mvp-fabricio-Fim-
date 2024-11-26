// src/components/Footer.stories.js
import React from "react";
import Footer from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
};

// Template para renderizar o Footer
const Template = (args) => <Footer {...args} />;

// Story padrão do Footer
export const Default = Template.bind({});
Default.args = {};
