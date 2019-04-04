import { createSelector } from 'reselect';
const moment = require('moment');

const graphSelector = state => state.get('graph')

export const selectGraphType = createSelector(
    graphSelector,
    (graph) => {
        const data = graph.get('data').toJS();
        let graphType = [];
        for(let i in data){
            const val = data[i].type;
            if(graphType.indexOf(val) == -1){
                graphType.push(val);
            }
        }
        return graphType;
    }
)


export const selectGraph = createSelector(
    graphSelector,
    (graph) => {
        let data = graph.get('data').toJS();
        let startDate = graph.get('start');
        let endDate = graph.get('end');
        let type = graph.get('type');
        if(type != 'none') {
            data = data.filter(item => item.type === type);
        }
        if(startDate) {

            data = data.filter(item => {              
                const flag = new Date(item.rdate).getTime() >= new Date(moment(startDate).format("MM-DD-YYYY")).getTime();
                return flag; 
            });
        }
        if(endDate) {
            data = data.filter(item => {              
                const flag = new Date(item.rdate).getTime() <= new Date(moment(endDate).format("MM-DD-YYYY")).getTime();
                return flag; 
            });
        }
        
        return {
            data,
            startDate,
            endDate,
            type
        };
    }
)