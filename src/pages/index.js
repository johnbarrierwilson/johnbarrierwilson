import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../components/button";

const IndexPage = () => {
  return (
    <div className="max-w-6xl flex flex-col mb-2 mx-auto p-6 space-y-10 md:mb-8 md:space-y-40">
      <div>
        <StaticImage
          alt="illustrated avatar logo"
          className="mt-2 rounded-full shadow-xl md:mt-12"
          height={85}
          src="../images/avatar.png"
          width={85}
        />
      </div>
      <div>
        <h1 className="font-bold text-3xl md:text-6xl">
          Hi! My name is John Barrier&nbsp;Wilson.
        </h1>
        <p className="leading-tight mt-3 text-xl text-gray-500 md:mt-8 md:text-4xl md:leading-normal">
          I'm currently a product design manager at{" "}
          <a
            className="decoration-gray-200 text-blue-500 underline underline-offset-4 hover:decoration-wavy"
            href="https://www.elastic.co/"
          >
            Elastic
          </a>{" "}
          focused on the onboarding process for new users. In my spare time, you
          can find me playing guitar or practicing photography. But most of the
          time, I'm hanging out with my kids and wife.
        </p>
        <p className="mt-10 text-xl md:text-2xl">
          <Button to="https://www.twitter.com/BarrierWilson">
            Follow me on Twitter
          </Button>
          <Button to="mailto:johnbarrierwilson@gmail.com">Email me</Button>
        </p>
      </div>
    </div>
  );
};

export default IndexPage;
