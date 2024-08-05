import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { AiOutlineTool } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies and Innovation</SectionTitle>
    <SectionText>
      I've worked with the following technologies.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle> Dharma</ListTitle>
          <ListParagraph>
          Revolutionizing legal processes by leveraging cutting-edge technology to enhance research capabilities and improve access to legal services.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Vega</ListTitle>
          <ListParagraph>
          Enhancing security and efficiency in transportation hubs through advanced AI and computer vision technology.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle> Mitra</ListTitle>
          <ListParagraph>
          Empowering students planning to study abroad with comprehensive end-to-end support.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineTool size="5.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Bhubashika</ListTitle>
          <ListParagraph>
          Breaking language barriers with our innovative real-time translation technology, embedded in earbuds designed to understand various languages across India.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
