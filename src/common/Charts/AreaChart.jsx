import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {
    AreaChart, Area, ReferenceLine, Tooltip, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend,
} from 'recharts';

import Grid from '@material-ui/core/Grid';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export const AreaChartGraph = ({ 
    graph, 
    classes, 
    selectGraphType,
    startDate,
    endDate,
    graphTypes
}) => {
    console.log(graph.type)
    return (
        <div>
            <ResponsiveContainer width={'100%'} height={270}>
                <AreaChart data={graph.data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="amt" stroke="#8884d8" strokeOpacity={0.2} fillOpacity={0.2} fill="#8884d8" />
                    <Area type="monotone" dataKey="uv" stroke="#82ca9d" strokeOpacity={0.2} fillOpacity={0.2} fill="#82ca9d" />
                    <Area type="monotone" dataKey="pv" stroke="#986767" strokeOpacity={0.2} fillOpacity={0.2} fill="#986767" />
                </AreaChart>
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

