import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: '5em',
    paddingBottom: '20em',
    '& dt': {
      marginTop: theme.spacing(2)
    }
  }
}));

const CTA = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="md" align="center">
        <Fade bottom duration={1500} delay={200}>
          <Box mb='2em'>
            <Typography component="p"
            variant="overline"
            color="secondary">
              04. What's Next?
            </Typography>
          </Box>
        </Fade>

        <Fade bottom duration={1500} delay={300}>
          <Box>
            <Typography variant="h1" color="textPrimary">
              Get In Touch
            </Typography>
          </Box>
        </Fade>

        <Fade bottom duration={1500} delay={300}>
          <Box p='3em' ml='8em' mr='8em'>
            <Typography variant="body2" color="textPrimary">
              I am always looking to find new challenges. Whether you
              are reaching out about a new opportunity, have a 
              question, or just want to say hi, my inbox is always 
              open.
            </Typography>
          </Box>
        </Fade>

        <Fade bottom duration={1500} delay={400}>
          <Box>
            <Button variant="outlined" color="primary" size='large'>
              <Typography variant="body2">
                Say Hello
              </Typography>
            </Button>
          </Box>
        </Fade>
      </Container>
    </div>
  );
};

CTA.propTypes = {
  className: PropTypes.string
};

export default CTA;
