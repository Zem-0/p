import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText style={{paddingBottom:0}}>
        I’m Rohith Reddy Desai, a third-year student at Madanapalle Institute of Technology & Science, and a passionate entrepreneur with a deep love for computer science and technology. My journey began with the University Innovation Fellow program at Stanford D School, where I honed my skills in design thinking and entrepreneurship. This led me to found Gyaantrix Technologies Pvt. Ltd., where I focus on leveraging technology to drive innovation and solve real-world problems.
        </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;