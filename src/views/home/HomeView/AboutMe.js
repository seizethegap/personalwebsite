import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Button,
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  makeStyles
} from '@material-ui/core';

import Fade from 'react-reveal/Fade';

import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 0,
    paddingBottom: 128,
    [theme.breakpoints.down('sm')]: {
      padding: '2em'
    }
  },
  listitem: {
    padding: 0
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  image: {
    '& > img': {
      maxWidth: '75%',
      height: 'auto',
      borderRadius: '0.25em',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%'
      },
      [theme.breakpoints.only('md')]: {
        maxWidth: '90%'
      },
      [theme.breakpoints.only('lg')]: {
        maxWidth: '75%'
      }
    }
  },
}));

const AboutMe = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="md" align="center" display="flex">
        <Fade bottom duration={1000} delay={200}>
          <Box mb='2em' align="left">
              <Box>
                <Typography component="p"
                variant="overline"
                color="secondary"
                display="inline">
                  01. 
                </Typography>

                <Typography variant="h3" display="inline" style={{ paddingLeft: '0.2em', color: "#FFFFFF"}}>
                  About Me
                </Typography>
              </Box>
          </Box>
        </Fade>

        <Fade bottom duration={1500} delay={200}>
        <Grid container direction="row" spacing={3}>
          <Grid item
          md={6} lg={6} xl={6}>
            <Box flexDirection="column">
              <Box mb='1em' align="left">
                <Typography variant="body2" color="textSecondary">
                  Hello! I'm Andrew, a software engineer based in San Jose, CA.
                </Typography>
              </Box>

              <Box mb='1em' align="left">
                <Typography variant="body2" color="textSecondary">
                  I enjoy developing desktop applications and things that live on the 
                  internet, whether that be creating an app with .NET, creating a 
                  website, and everything in between. My goal is to always build 
                  high quality enterprise software that provide a user-friendly 
                  and robust experience. 
                </Typography>
              </Box>

              <Box mb='1em' align="left">
                <Typography variant="body2" color="textSecondary">
                  Shortly after graduating from Sacramento State, I joined the 
                  engineering team at Exatron, Inc. where I work on a wide variety 
                  of interesting and meaningful projects on a daily basis.
                </Typography>
              </Box>

              <Box align="left">
                <Typography variant="body2" color="textSecondary">
                  Here are a few technologies I've been working with recently:
                </Typography>
              </Box>

              <Box p='1em'>
                <Grid container direction="row">
                  <Grid items
                  xs={6} md={6} lg={6} xl={6}>
                    <Box>
                      <List>
                        <ListItem className={classes.listitem}>
                            <ListItemIcon>
                                <ArrowRightRoundedIcon style={{ color: "#8a85ff" }} />
                            </ListItemIcon>
                            <Typography variant="body2" color="textSecondary">
                                C#
                            </Typography>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <ListItemIcon>
                                <ArrowRightRoundedIcon style={{ color: "#8a85ff" }} />
                            </ListItemIcon>
                            <Typography variant="body2" color="textSecondary">
                                C++
                            </Typography>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <ListItemIcon>
                                <ArrowRightRoundedIcon style={{ color: "#8a85ff" }} />
                            </ListItemIcon>
                            <Typography variant="body2" color="textSecondary">
                                Java
                            </Typography>
                        </ListItem>
                      </List>
                    </Box>
                  </Grid>

                  <Grid items
                  xs={6} md={6}  lg={6} xl={6}>
                    <Box>
                      <List>
                        <ListItem className={classes.listitem}>
                            <ListItemIcon>
                                <ArrowRightRoundedIcon style={{ color: "#8a85ff" }} />
                            </ListItemIcon>
                            <Typography variant="body2" color="textSecondary">
                                Javascript
                            </Typography>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <ListItemIcon>
                                <ArrowRightRoundedIcon style={{ color: "#8a85ff" }} />
                            </ListItemIcon>
                            <Typography variant="body2" color="textSecondary">
                                React.js
                            </Typography>
                        </ListItem>

                        <ListItem className={classes.listitem}>
                            <ListItemIcon>
                                <ArrowRightRoundedIcon style={{ color: "#8a85ff" }} />
                            </ListItemIcon>
                            <Typography variant="body2" color="textSecondary">
                                Material-UI
                            </Typography>
                        </ListItem>
                      </List>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item
          md={6} lg={6} xl={6}>
            <Box>
              <div className={classes.image}>
                <img
                  alt="Presentation"
                  src="/static/images/profilepic.jpg"
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

AboutMe.propTypes = {
  className: PropTypes.string
};

export default AboutMe;
