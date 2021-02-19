import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import ExperienceMenu from 'src/components/ExperienceMenu';

import Fade from 'react-reveal/Fade';
import "animate.css/animate.compat.css";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: '10em',
    paddingBottom: '5em',
    paddingLeft: '15em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2em'
    }
  },
  title: {
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const Experience = ({ className, ...rest }) => {
  const classes = useStyles();
  
  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="md" display="flex" flexDirection="row" justifyContent="flex-end">
        <Fade bottom duration={1000} delay={200}>
        <Box mb='2em'>
          <Typography component="p"
          variant="overline"
          color="secondary"
          display="inline">
            02.
          </Typography>
          <Typography variant="h3" display="inline" style={{ paddingLeft: '0.2em', color: "#FFFFFF"}}>
            Where I've Worked
          </Typography>
        </Box>
        </Fade>

        <Fade bottom duration={1500} delay={200}>
        <Grid container="row">
          <Grid item
          xl={12}>
            <Box>
              <Box>
                <ExperienceMenu />
              </Box>

            </Box>
          </Grid>
        </Grid>
        </Fade>
      </Container>
    </div>
  );
};

Experience.propTypes = {
  className: PropTypes.string
};

export default Experience;
