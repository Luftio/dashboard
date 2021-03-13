import React from "react";
import * as nextImage from "next/image";
import { withNextRouter } from "storybook-addon-next-router";
import { addDecorator } from "@storybook/react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../shared/Global";
import theme from "../config/theme";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

addDecorator(
  withNextRouter({
    path: "/",
    asPath: "/",
    query: {},
    push() {},
  }),
);
