import React from "react";
import PropTypes from "prop-types";
import Spacer from "./Spacer";

import Section from "./Section";

const About = () => {
  return (
    <Section>
      <Spacer vertical="2em">
        <h2>About me</h2>
        <Spacer vertical="1em">
          <p>I chat shit and drink cider</p>
          <p>Devon boi.</p>
        </Spacer>
      </Spacer>
    </Section>
  );
};

export default About;
