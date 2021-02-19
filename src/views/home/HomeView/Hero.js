import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Button,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import ScrollAnimation from 'react-animate-on-scroll';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: '20vh',
    paddingBottom: '30vh',
    minHeight: '100vh',
    paddingLeft: '5vw',
    width: 'auto',
    [theme.breakpoints.up(3840)]: {
      paddingTop: '30vh'
    }
  },
  technologyIcon: {
    height: 40,
    margin: theme.spacing(1)
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
      transform: 'rotateY(-35deg) rotateX(15deg)',
      backfaceVisibility: 'hidden',
    }
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      maxWidth: '90%',
      height: 'auto'
    }
  },
  cardFilled: {
    backgroundColor: 'secondary',
    [theme.breakpoints.up('md')]: {
      width: '8em',
      height: '3.5em'
    }
  },
}));

const Hero = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg" style={{ padding: '2em' }}>
          <Box mb='1.25em'>
          <ScrollAnimation animateIn="fadeInUp" duration={1} delay={400} >
              <Typography component="p"
              variant="overline"
              color="secondary">
                Hi, my name is
              </Typography>
            </ScrollAnimation>
          </Box>

        <Box mb='1em'>
          <ScrollAnimation animateIn="fadeInUp" duration={1} delay={300}>
            <Typography variant="h1" style={{ color: '#FFFFFF'}}>
              Andrew Nguyen.
            </Typography>
            </ScrollAnimation>
        </Box>

        <Box mb='1.5em'>
          <ScrollAnimation animateIn="fadeInUp" duration={1} delay={200} >
            <Typography variant="h1" color="textSecondary">
              I build apps for Enterprise.
            </Typography>
            </ScrollAnimation>
        </Box>

        <Box mb='3em' pr={{ xl: '34em' }}>
          <ScrollAnimation animateIn="fadeInUp" duration={1} delay={100} >
            <Typography variant="body2" color="textSecondary">
              I'm a software engineer based in San Jose, CA with a passion
              for Object-Oriented Programming and .NET Framework development. I am 
              always open to new challenges and believe that engineering is a 
              lifelong journey of learning.
            </Typography>
            </ScrollAnimation>
        </Box>

        <Box>
          <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce>
            <Button variant="outlined" color="primary" size='large'>
              <Typography variant="body2">
                Get in Touch
              </Typography>
            </Button>
          </ScrollAnimation>
        </Box>
      </Container>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
