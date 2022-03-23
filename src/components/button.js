import * as React from "react";
import styled from "@emotion/styled";
import { darken } from "polished";

const Button = styled.a`
  background: ${(p) => p.theme.colors.primary};
  border-radius: ${(p) => p.theme.radius.m};
  color: ${(p) => p.theme.colors.white};
  display: inline-block;
  font-weight: 600;
  margin-right: ${(p) => p.theme.spacing.s};
  padding: ${(p) => p.theme.spacing.m} ${(p) => p.theme.spacing.l};
  text-decoration: none;

  &:hover {
    background: ${(p) => darken(0.1, p.theme.colors.primary)};
  }
`;

const Component = ({ to, children }) => <Button href={to}>{children}</Button>;

export default Component;
