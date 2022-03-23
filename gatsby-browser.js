import React from "react";
import Layout from "./src/components/layout";
import { ThemeProvider } from "@emotion/react";

import theme from "./src/styles/theme";

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
