import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Hidden,
  Typography,
  Link,
  makeStyles
} from '@material-ui/core';
import { APP_VERSION } from 'src/constants';
import Logo from 'src/components/Logo';
import { Slide, useScrollTrigger } from "@material-ui/core"

import HideOnScroll from 'src/components/HideOnScroll';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
  },
  toolbar: {
    height: 64
  },
  logo: {
    marginRight: theme.spacing(2)
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: 'none',
	  background: 'linear-gradient(currentColor, currentColor) bottom / 0 .1em no-repeat',
    transition: '0.5s background-size',
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(2)
    },
    
    "&:hover": {
      backgroundSize: '100% .1em',
      color: '#8a85ff'
    }
  },
}));

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div>
    <HideOnScroll>
    <AppBar
      color="transparent"
      className={clsx(classes.root, className)}
      position="fixed"
      {...rest}
    >
      <Toolbar component="nav" className={classes.toolbar}>
        <RouterLink to="/">
          <Logo className={classes.logo} />
        </RouterLink>
        <Box flexGrow={1} />
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/app"
          underline="none"
          variant="body2"
          style={{ fontSize: '0.8rem' }}
        >
          About
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/docs"
          underline="none"
          variant="body2"
          style={{ fontSize: '0.8rem' }}
        >
          Experience
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/docs"
          underline="none"
          variant="body2"
          style={{ fontSize: '0.8rem' }}
        >
          Projects
        </Link>
        <Divider className={classes.divider} />
        <Button
          color="secondary"
          component="a"
          href="https://material-ui.com/store/items/devias-kit-pro"
          variant="outlined"
          size="small"
        >
          Resume
        </Button>
      </Toolbar>
    </AppBar>
    </HideOnScroll>
    </div>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
