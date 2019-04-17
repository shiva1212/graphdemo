import React from 'react';
import TextField from '@material-ui/core/TextField';

import {
    BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import Grid from '@material-ui/core/Grid';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export const BarChartGraph = ({
    graph,
    classes,
    selectGraphType,
    startDate,
    endDate,
    graphTypes
}) => {
    return (
        <div>
            <ResponsiveContainer width={'100%'} height={270}>
                <BarChart
                    data={graph.data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name"  tick={{ fontSize: 11 }}/>
                    <YAxis tick={{ fontSize: 11 }}  />
                    <Tooltip />
                    <Bar dataKey="pv" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
            <Grid justify="space-between"
                container
                spacing={24}>
                <Grid item>
                    <form className={classes.formCotainer} noValidate>
                        <TextField
                            value={graph.startDate}
                            id="fromDate"
                            type="date"
                            className={classes.textField}
                            InputProps={{
                                classes: {
                                    input: classes.fieldResize,
                                },
                            }}
                            onChange={startDate}
                        />
                        <TextField
                            value={graph.endDate}
                            id="toDate"
                            type="date"
                            className={classes.textField}
                            InputProps={{
                                classes: {
                                    input: classes.fieldResize,
                                },
                            }}
                            onChange={endDate}
                        />
                    </form>
                </Grid>
                <Grid item>
                    <div className={classes.graphTypeBreakPoint}>
                        <FormControl className={classes.textField}>
                            <Select
                                className={classes.fieldResize}
                                value={graph.type}
                                onChange={selectGraphType}
                            >
                                <MenuItem value="none">
                                    <em>None</em>
                                </MenuItem>
                                {graphTypes && graphTypes.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}

