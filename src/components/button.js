import * as React from "react";

const Button = ({ to, children }) => (
  <a
    className="bg-blue-500 block float-left font-semibold mb-3 mr-5 px-7 py-2 rounded-full text-white tracking-wide md:px-10 md:py-3"
    href={to}
  >
    {children}
  </a>
);

export default Button;
