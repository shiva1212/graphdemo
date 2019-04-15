import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
    margin: {
        marginLeft: theme.spacing.unit * 1.2,
        marginRight: theme.spacing.unit * 1.2,
    },
    filterContainer: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 0
    },
    select: {
        '&:before': {
            borderColor: '#fff',
        },
        '&:after': {
            borderColor: '#fff',
        },
        width: 120,
        color: '#fff'
    },
    icon: {
        fill: '#fff',
    }
});

class ChartTypeFilter extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const { classes, chartTypeFilter, selectedChartHandler } = this.props;
        return (
            <Card className={classNames(classes.filterContainer)}>
                <CardContent className={classes.margin}>
                    <Select className={classes.select}
                        value={chartTypeFilter.selected}
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                            },
                        }}
                        onChange={(e => {
                            selectedChartHandler(e.target.value);
                        })}
                    >
                        {chartTypeFilter.types.map((item, index) => <MenuItem value={item.id}>{item.label}</MenuItem>)}               
                    </Select>

                </CardContent>
            </Card>
        )
    }
}
export default withStyles(styles, { withTheme: true })(ChartTypeFilter);