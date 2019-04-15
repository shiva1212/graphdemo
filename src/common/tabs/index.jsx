import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function TabContainer(props) {

    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    textField: {
        width: 120
    },
    fieldResize: {
        fontSize: 12,
        color: theme.palette.common.white,
    },
    relativePostion: {
        position: 'relative',
    },
    formPosition: {
        position: 'absolute',
        top: 10,
        right: 10
    }
});

class CustomTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.relativePostion}>
                    <Fragment>
                        <AppBar position="static">
                            <Tabs value={value} onChange={this.handleChange}>
                                <Tab label="Winning" />
                                <Tab label="Loosing" />
                            </Tabs>
                        </AppBar>
                        {value === 0 && <TabContainer>Winning</TabContainer>}
                        {value === 1 && <TabContainer>Loosing</TabContainer>}
                    </Fragment>
                    <div className={classes.formPosition} >
                        <form noValidate>
                            <TextField
                                id="fromDate"
                                type="date"
                                className={classes.textField}
                                InputProps={{
                                    classes: {
                                        input: classes.fieldResize
                                    },
                                }}
                            />
                            <TextField
                                id="toDate"
                                type="date"
                                className={classes.textField}
                                InputProps={{
                                    classes: {
                                        input: classes.fieldResize
                                    },
                                }}
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

CustomTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomTabs);