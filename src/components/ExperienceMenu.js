import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { isConstructorDeclaration } from 'typescript';
import { SelectionState } from 'draft-js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';

import Fade from 'react-reveal/Fade';
import Animate from 'animate.css-react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontColor: '#ffffff'
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  demo: {
      paddingRight: '6em'
  },
  button: {
        borderWidth: 0,
        borderLeftWidth: 3, 
        borderColor: '#adb0bb',
        borderStyle: 'solid',
        "&:hover": {
            borderColor: '#8a85ff'
        },
  },
  hoverText: {
        "&:hover": {
            color: '#8a85ff'
        }
  }
}));

export default function ExperienceMenu() {
  const classes = useStyles();
  const [job1, setJob1] = React.useState(() => {
    return <div>
        <Typography component="p"
        variant="overline" color="textSecondary" className={classes.hoverText} style={{ fontSize: '0.8rem' }}>
            Exatron, Inc.
        </Typography>
    </div>
  });

  const [job2, setJob2] = React.useState(() => {
    return <div>
        <Typography component="p"
        variant="overline" color="textSecondary" className={classes.hoverText} style={{ fontSize: '0.8rem' }}>
            SMUD
        </Typography>
    </div>
  });

  const [message, setMessage] = React.useState(() => {
    return <div>
        <Box>
            <Typography variant="h4">
                Software Engineer <font color="#8a85ff">@ Exatron, Inc</font>.
            </Typography>
        </Box>

        <Box>
            <Typography variant="overline" style={{ fontSize: '0.8rem' }}>
                September 2020 - Present
            </Typography>
        </Box>
        
        <Box>
            <div className={classes.demo}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowRightRoundedIcon style={{ color: "#8a85ff" }} />
                        </ListItemIcon>
                        <Typography variant="body2" color="textSecondary">
                            Write modern, performant, maintainable code for a diverse array of client and internal projects.
                        </Typography>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <ArrowRightRoundedIcon style={{ color: "#8a85ff" }} />
                        </ListItemIcon>
                        <Typography variant="body2" color="textSecondary">
                            Work with a variety of different languages, frameworks, and design patterns 
                            such as C++ MFC, C# WPF, and MVVM.
                        </Typography>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <ArrowRightRoundedIcon style={{ color: "#8a85ff" }} />
                        </ListItemIcon>
                        <Typography variant="body2" color="textSecondary">
                            Cross-functional collaboration with hardware technicians throughout the product 
                            development lifecycle.
                        </Typography>
                    </ListItem>
                </List>
            </div>
        </Box>

    </div>
});


  return (
    <div className={classes.root}>
        <Grid container spacing={6} direction="row">
            <Grid item
            lg={3} xl={3}>
                <MenuList>
                    <Box className={classes.button}>
                        <MenuItem onClick={() => { setMessage(() => {
                            return <div>
                                <Fade>
                                    <Box>
                                        <Box>
                                            <Typography variant="h4">
                                                Software Engineer <font color="#8a85ff">@ Exatron, Inc</font>.
                                            </Typography>
                                        </Box>

                                        <Box>
                                            <Typography variant="overline" style={{ fontSize: '0.8rem' }}>
                                                September 2020 - Present
                                            </Typography>
                                        </Box>
                                        
                                        <Box>
                                            <div className={classes.demo}>
                                                <List>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <ArrowRightRoundedIcon style={{ color: "#8a85ff" }} />
                                                        </ListItemIcon>
                                                        <Typography variant="body2" color="textSecondary">
                                                            Write modern, performant, maintainable code for a diverse array of client and internal projects.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <ArrowRightRoundedIcon style={{ color: "#8a85ff" }} />
                                                        </ListItemIcon>
                                                        <Typography variant="body2" color="textSecondary">
                                                            Work with a variety of different languages, frameworks, and design patterns 
                                                            such as C++ MFC, C# WPF, and MVVM.
                                                        </Typography>
                                                    </ListItem>

                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <ArrowRightRoundedIcon style={{ color: "#8a85ff" }} />
                                                        </ListItemIcon>
                                                        <Typography variant="body2" color="textSecondary">
                                                            Cross-functional collaboration with hardware technicians throughout the product 
                                                            development lifecycle.
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </Box>
                                    </Box>
                                </Fade>
                            </div>
                        });
                        setJob1(() => {
                            setJob2(() => {
                                return <div>
                                    <Typography component="p"
                                    variant="overline" color="textSecondary" className={classes.hoverText} style={{ fontSize: '0.8rem' }}>
                                        SMUD
                                    </Typography>
                                </div>
                            });
                            return <div>
                                <Typography component="p"
                                variant="overline" color="secondary" className={classes.hoverText} style={{ fontSize: '0.8rem' }}>
                                    Exatron, Inc.
                                </Typography>
                            </div>
                        })
                    }}>
                            {job1}
                        </MenuItem>
                    </Box>
                    <Box className={classes.button}>
                        <MenuItem onClick={() => { setMessage(() => {
                            return <div>
                                <Animate appear="fadeIn" durationAppear={1000}>
                                <Box>
                                    <Box>
                                        <Typography variant="h4">
                                            Security Compliance Intern <font color="#8a85ff">@ SMUD</font>.
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="overline" style={{ fontSize: '0.8rem' }}>
                                            June 2016 - January 2018
                                        </Typography>
                                    </Box>
                                    
                                    <Box>
                                        <div className={classes.demo}>
                                            <List>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon style={{ color: "#8a85ff" }} />
                                                    </ListItemIcon>
                                                    <Typography variant="body2" color="textSecondary">
                                                        Prevented revenue loss imposed by fines by facilitating comprehensive audits to ensure 
                                                        compliance with NERC CIP standards.
                                                    </Typography>
                                                </ListItem>

                                                <ListItem>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon style={{ color: "#8a85ff" }} />
                                                    </ListItemIcon>
                                                    <Typography variant="body2" color="textSecondary">
                                                        Migrated data regarding CIP documentation, deadlines, and records from Excel to Access for easier document searching and
                                                        record-keeping.
                                                    </Typography>
                                                </ListItem>

                                                <ListItem>
                                                    <ListItemIcon>
                                                        <ArrowRightRoundedIcon style={{ color: "#8a85ff" }} />
                                                    </ListItemIcon>
                                                    <Typography variant="body2" color="textSecondary">
                                                        Implemented VBA macros in Excel and Access for automated deadline tracking to detect and 
                                                        precent late deliverables.
                                                    </Typography>
                                                </ListItem>
                                            </List>
                                        </div>
                                    </Box>
                                </Box>
                                </Animate>
                            </div>
                        });
                        setJob2(() => {
                            setJob1(() => {
                                return <div>
                                    <Typography component="p"
                                    variant="overline" color="textSecondary" className={classes.hoverText} style={{ fontSize: '0.8rem' }}>
                                        Exatron, Inc.
                                    </Typography>
                                </div>
                            });
                            return <div>
                                <Typography component="p"
                                variant="overline" color="secondary" className={classes.hoverText} style={{ fontSize: '0.8rem' }}>
                                    SMUD
                                </Typography>
                            </div>
                        })
                        }}>
                            {job2}
                        </MenuItem> 
                    </Box>
                </MenuList>
            </Grid>

            <Grid item
            lg={8} xl={8}>
                <Box mt='0.8em'>
                    <Typography variant="body2" color="textSecondary">
                        {message}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    </div>
  );
}
