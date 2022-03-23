import * as React from "react";
import styled from "@emotion/styled";
import { theme } from "styled-tools";

const Button = styled.a`
  background: ${theme("colors.primary")};
  border-radius: ${theme("radius.m")};
  color: ${theme("colors.white")};
  display: inline-block;
  font-weight: 600;
  margin-right: ${theme("spacing.s")};
  padding: ${theme("spacing.m")} ${theme("spacing.l")};
  text-decoration: none;
`;

const Component = ({ to, children }) => <Button href={to}>{children}</Button>;

export default Component;
