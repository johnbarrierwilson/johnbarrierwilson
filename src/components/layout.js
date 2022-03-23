import React from "react";
import { Global, css } from "@emotion/react";

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        html {
          -webkit-font-smoothing: antialiased;
          box-sizing: border-box;
          font-family: system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 21px;
          line-height: 1.45;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ol,
        ul {
          margin: 0;
          padding: 0;
          font-weight: normal;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 800;
        }

        ol,
        ul {
          list-style: none;
        }

        img {
          max-width: 100%;
          height: auto;
        }
      `}
    />
    {children}
  </>
);

export default Layout;
