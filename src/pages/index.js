import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../components/button";
import Container from "../components/container";

const IndexPage = () => {
  return (
    <Container>
      <StaticImage
        alt="illustrated avatar logo"
        height={85}
        src="../images/avatar.png"
        width={85}
      />
      <h1>Hi! My name is John Barrier&nbsp;Wilson.</h1>
      <p>
        I'm currently a product design manager at{" "}
        <a href="https://www.elastic.co/">Elastic</a> focused on the onboarding
        process for new users. In my spare time, you can find me playing guitar
        or practicing photography. But most of the time, I'm hanging out with my
        kids and wife.
      </p>
      <p>
        <Button to="https://www.twitter.com/BarrierWilson">
          Follow me on Twitter
        </Button>
        <Button to="mailto:johnbarrierwilson@gmail.com">Email me</Button>
      </p>
    </Container>
  );
};

export default IndexPage;
