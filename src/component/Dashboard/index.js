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

import Tabs from '../../common/tabs';

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

    render() {
        const { classes, result, graphData } = this.props;
        console.log(this.props)
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
                                            <AreaChartGraph
                                            classes={classes} 
                                            graph={graphData}
                                            startDate={(e) => this.props.startDate(e.target.value)}
                                            endDate={(e) => this.props.endDate(e.target.value)}
                                            selectGraphType={(e) => this.props.graphType(e.target.value)}
                                            graphType={this.props.graphType}
                                            graphTypes={this.props.graphTypes}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Tabs />
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