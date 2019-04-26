import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import FilterSettings from '../../component/FilterSettings';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { AreaChartGraph } from '../../common/Charts/AreaChart';
import { BarChartGraph } from '../../common/Charts/BarChart';
import Tabs from '../../common/tabs';
import EnhancedTable from '../EnhancedTable';
import ChartTypeFilter from '../ChartTypeFilter';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: '#000000'
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
    },
    borderLeft: {
        display: 'inline-block',
        borderLeft: '1px solid #dddddd',
        paddingRight: 7,
        paddingLeft: 7
    }
});

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.hideFilters = this.hideFilters.bind(this);
        this.showFilters = this.showFilters.bind(this);
    }

    showFilters() {
        console.log("test")
    }

    hideFilters() {

    }

    componentWillMount() {
        this.props.requestData()
    }

    render() {
        const {selectedGlobalFilter, globalFilters, classes, lineData, barData, chartTypeFilter, selectedChartType } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />

                <FilterSettings classes={classes} 
                    globalFilters={globalFilters}
                    showFilters={this.showFilters}
                    selectedGlobalFilter={selectedGlobalFilter} 
                    globalActionFilter={this.props.selectGlobalFilter}
                    hideFilters={this.hideFilters}/>
                <ChartTypeFilter chartTypeFilter={chartTypeFilter} selectedChartHandler={selectedChartType} />
                <div className={classes.margin}>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            <Card>
                                <CardContent>
                                    <Grid container spacing={24}>
                                        <Grid item xs={12}>
                                            {chartTypeFilter.selected === 'line' ? (
                                                <AreaChartGraph
                                                    classes={classes}
                                                    graph={lineData}
                                                    startDate={(e) => this.props.startDate(e.target.value)}
                                                    endDate={(e) => this.props.endDate(e.target.value)}
                                                    selectGraphType={(e) => this.props.graphType(e.target.value)}
                                                    graphType={this.props.graphType}
                                                    graphTypes={this.props.graphTypes}
                                                />
                                            ) : null
                                            }
                                            {chartTypeFilter.selected === 'bar' ? (
                                                <BarChartGraph
                                                    classes={classes}
                                                    graph={barData}
                                                    startDate={(e) => this.props.startDate(e.target.value)}
                                                    endDate={(e) => this.props.endDate(e.target.value)}
                                                    selectGraphType={(e) => this.props.graphType(e.target.value)}
                                                    graphType={this.props.graphType}
                                                    graphTypes={this.props.graphTypes}
                                                />
                                            ) : null
                                            }
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
                            <EnhancedTable {...this.props} />
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