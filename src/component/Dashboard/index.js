import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from '../../layout/Header';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { AreaChartGraph } from '../../common/Charts/AreaChart';

const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
    margin: {
        margin: theme.spacing.unit * 1.5,
    },
    formCotainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: 40
    },
    textField: {
        width: 120,        
    },
    fieldResize: {
        fontSize: 12,
    },
    graphTypeBreakPoint: {
        [theme.breakpoints.up('xs')]: {
            marginRight: 10
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: 40
        }
    }  
});

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.requestData()
    }
    handleSelectChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { classes, result, graphData } = this.props;
        console.log(graphData)
        
        return (
            <div className={classes.root}>
                <CssBaseline />
                <Header {...this.props} />
                <div className={classes.margin}>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            <Card>
                                <CardContent>
                                    <Grid container spacing={24}>
                                        <Grid item xs={12}>
                                            <AreaChartGraph handleSelectChange={this.handleSelectChange} 
                                            classes={classes} graphData={graphData}/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            tab
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card>
                                <CardContent>
                                    sdfgd
                            </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            adsdf
                    </Grid>
                    </Grid>
                </div>

            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Dashboard);