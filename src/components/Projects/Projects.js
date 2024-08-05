import React from 'react';
import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import { GridContainer } from './ProjectsStyles';
import {ExternalLinks} from "../Cards/CardStyles";

import {projects} from '../../constants/constants';
import ProjectCard from "../Cards/ProjectCard";

const Projects = () => {
  return (
    <Section id="projects">
      <SectionDivider divider />
      <SectionTitle>Latest Projects</SectionTitle>

    </Section>
)};

export default Projects;