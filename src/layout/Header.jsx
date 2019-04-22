import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

import FilterSettings from '../component/FilterSettings';

export const Header = ({classes, showFilters}) => {
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: '#ffffff'}}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                        Rx360
                    </Typography>
                    <div className={classes.grow} />
                    <div>
                        <div className={classes.borderLeft}>
                            <IconButton color="inherit"  onClick={showFilters}>
                                <AllInclusiveIcon color="primary" />
                            </IconButton>
                        </div>
                        <div className={classes.borderLeft}>
                            <IconButton color="inherit" >
                                <Badge badgeContent={10} color="secondary">
                                    <NotificationsIcon color="primary" />
                                </Badge>
                            </IconButton>
                        </div>
                        <div className={classes.borderLeft}>
                            <IconButton
                                aria-owns={false ? 'material-appbar' : undefined}
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle color="primary"/>
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <FilterSettings />
        </div>
    )
}