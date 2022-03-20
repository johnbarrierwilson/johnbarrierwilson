import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <div className="max-w-5xl flex flex-col mb-8 mx-auto p-6 space-y-40">
      <div>
        <StaticImage
          alt="illustrated avatar logo"
          className="mt-12 rounded-full shadow-xl"
          height={125}
          src="../images/avatar.png"
          width={125}
        />
      </div>
      <div>
        <h1 className="text-8xl font-bold">
          Hi! My name is John&nbsp;Barrier Wilson.
        </h1>
        <p className="leading-tight mt-10 text-4xl">
          I'm currently a product design manager at Elastic focused on the
          onboarding process for new users. In my spare time, you can find me
          playing guitar or practicing iPhone photography. But, most of the
          time, it's hanging out with my kids and wife.
        </p>
        <p className="mt-10 text-3xl">
          <a
            className="bg-blue-500 inline-block px-10 py-3 rounded-full text-white"
            href="mailto:johnbarrierwilson@gmail.com"
          >
            Email me: johnbarrierwilson@gmail.com
          </a>
          <br />
          <br />
          <a
            className="bg-blue-500 inline-block px-10 py-3 rounded-full text-white"
            href="https://www.twitter.com/BarrierWilson"
          >
            Find me on Twitter
          </a>
        </p>
      </div>
    </div>
  );
};

export default IndexPage;
