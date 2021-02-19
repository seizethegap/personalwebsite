import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Experience from './Experience';
import FeaturedProjects from './FeaturedProjects';
import CTA from './CTA';


const useStyles = makeStyles(() => ({
  root: {}
}));

const HomeView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Hero />
      <AboutMe />
      <Experience />
      <FeaturedProjects />
      <CTA />
    </Page>
  );
};

export default HomeView;
