import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 128,
    paddingBottom: 128,
    display: 'flex',
    paddingLeft: '25em',
    paddingRight: '25em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2em',
      paddingRight: '2em'
    }
  },
  browseButton: {
    marginLeft: theme.spacing(2)
  },
  cardFilled: {
    minHeight: '10vh',
    maxWidth: '60vw',
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    alignItems: "center",
    perspective: 1500,
    borderRadius: '0.2em',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  vertCenter: {
    display: 'flex',
    alignItems: 'center',

  },
  image: {
    '& > img': {
      maxWidth: '30vw',
      height: 'auto',
      borderRadius: '0.5em',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        position: 'relative',
        bottom: 100,
        zIndex: 0
      },
      [theme.breakpoints.only('md')]: {
        maxWidth: '90%'
      },
      [theme.breakpoints.up(2560)]: {
        maxWidth: '18.7vw',
      }
    },
    '& > video': {
      maxWidth: '30vw',
      height: 'auto',
      borderRadius: '0.5em',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        position: 'relative',
        bottom: 100,
        zIndex: 0
      },
      [theme.breakpoints.only('md')]: {
        maxWidth: '90%'
      },
      [theme.breakpoints.up(2560)]: {
        maxWidth: '18.7vw',
      }
    },
  },
}));

const FeaturedProjects = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Fade bottom duration={1000} delay={200}>
          <Box mb='2em'>
            <Typography component="p"
            variant="overline"
            color="secondary"
            display="inline">
              03.
            </Typography>
            <Typography variant="h3" display="inline" style={{ paddingLeft: '0.2em', color: "#FFFFFF"}}>
              Some Things I've Built
            </Typography>
          </Box>
        </Fade>

        <Fade bottom duration={1500} delay={200}>
          <Grid container direction="row-reverse">
            <Grid item className={classes.vertCenter}
            lg={6} xl={6} align="right">
              <Box>
                <Box>
                  <Typography component="p"
                  variant="overline"
                  color="secondary">
                    Featured Project
                  </Typography>
                </Box>
                
                <Box mb='2em'>
                  <Typography variant="h3" color="textPrimary">
                    Machine Handler Software
                  </Typography>
                </Box>

                <Box>
                  <Card className={classes.cardFilled} variant='outlined'>
                    <CardContent>
                      <Fade duration={2000} delay={100}>
                      <Box p='1em'>
                        <Typography variant='body2' style={{ color: '#e5e5e5' }}>
                          Software to fine tune automation parameters for automated 
                          testing of microchips. Custom features are developed on 
                          the fly as per customer requests.
                        </Typography>
                      </Box>
                      </Fade>
                    </CardContent>
                  </Card>
                </Box>

                <Box mt='1em'>
                  <Typography variant="overline" color="textSecondary" style={{ fontSize: '0.8rem' }}>
                    C++ MFC  C# WPF
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item
            lg={6} xl={6}>
              <Box>
                <div className={classes.image}>
                  <video autoplay="autoplay" muted playsInline>
                    <source src="/static/videos/MachineHandler.mp4" type="video/mp4" />
                  </video>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Fade>

        <Fade bottom duration={1500} delay={200}>
          <Grid container direction="row" style={{ paddingTop: '5em' }}>
            <Grid item className={classes.vertCenter}
              lg={6} xl={6} align="left">
                <Box>
                  <Box>
                    <Typography component="p"
                    variant="overline"
                    color="secondary">
                      Featured Project
                    </Typography>
                  </Box>
                  
                  <Box mb='2em'>
                    <Typography variant="h3" color="textPrimary">
                      Koi Fish Studios Website
                    </Typography>
                  </Box>

                  <Box>
                    <Card className={classes.cardFilled} variant='outlined'>
                      <CardContent>
                        <Fade duration={2000} delay={100}>
                          <Box p='1em'>
                            <Typography variant='body2' style={{ color: '#e5e5e5' }}>
                              A working front-end prototype of Koi Fish Studios' website. 
                              A start-up design agency specializing in product design and 
                              sprints.
                            </Typography>
                          </Box>
                        </Fade>
                      </CardContent>
                    </Card>
                  </Box>

                  <Box mt='1em'>
                    <Typography variant="overline" color="textSecondary" style={{ fontSize: '0.8rem' }}>
                      Javascript React.js Material-UI
                    </Typography>
                  </Box>
                </Box>
            </Grid>

            <Grid item style={{ marginLeft: '-5vmin' }}
            lg={6} xl={6} align="right">
              <Box>
                <div className={classes.image}>
                  <img
                    alt="Presentation"
                    src="/static/images/exatronpic.jpg"
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Fade>

        <Fade bottom duration={1500} delay={200}>
          <Grid container direction="row-reverse" style={{ paddingTop: '5em' }}>
            <Grid item className={classes.vertCenter}
            lg={6} xl={6} align="right">
              <Box>
                <Box>
                  <Typography component="p"
                  variant="overline"
                  color="secondary">
                    Featured Project
                  </Typography>
                </Box>
                
                <Box mb='2em'>
                  <Typography variant="h3" color="textPrimary">
                    MapleStory Private Server
                  </Typography>
                </Box>

                <Box>
                  <Card className={classes.cardFilled} variant='outlined'>
                    <CardContent>
                      <Fade duration={2000} delay={100}>
                        <Box p='1em'>
                          <Typography variant='body2' style={{ color: '#e5e5e5' }}>
                            Open source development of a fully-functional emulator of popular online 
                            game MapleStory written with Java, Javascript, and MySQL.
                          </Typography>
                        </Box>
                      </Fade>
                    </CardContent>
                  </Card>
                </Box>

                <Box mt='1em'>
                  <Typography variant="overline" color="textSecondary" style={{ fontSize: '0.8rem' }}>
                    Java Javascript MySQL
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item
            lg={6} xl={6}>
              <Box>
                <div className={classes.image}>
                  <img
                    alt="Presentation"
                    src="/static/images/exatronpic.jpg"
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </div>
  );
};

FeaturedProjects.propTypes = {
  className: PropTypes.string
};

export default FeaturedProjects;
