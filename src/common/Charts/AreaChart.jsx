import React, { Component } from 'react';
import {
    AreaChart, Area, ReferenceLine, Tooltip, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend,
} from 'recharts';

export const AreaChartGraph = ({ graphData }) => {
    return (
        <ResponsiveContainer width={'100%'} height={270}>
            <AreaChart data={graphData.toJS()}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="amt" stroke="#8884d8" strokeOpacity={0.2} fillOpacity={0.2} fill="#8884d8" />
                <Area type="monotone" dataKey="uv" stroke="#82ca9d" strokeOpacity={0.2} fillOpacity={0.2} fill="#82ca9d" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

