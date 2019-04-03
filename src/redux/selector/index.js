import { createSelector } from 'reselect';
const moment = require('moment');

const graphSelector = state => state.get('graph')

export const selectGraph = createSelector(
    graphSelector,
    (graph) => {
        let data = graph.get('data').toJS();
        let startDate = graph.get('start');
        let endDate = graph.get('end');
        let type = graph.get('type');
        if(type) {
            data = data.filter(item => item.type === type);
        }
        if(startDate) {

            data = data.filter(item => {
                console.log(item.rdate +"  "+moment(startDate).format("DD-MM-YYYY"))
                console.log(moment(item.rdate).diff(moment(moment(startDate).format("DD-MM-YYYY"))))
                return moment(item.rdate).diff(moment(moment(startDate).format("DD-MM-YYYY"))) >= 0
                
            });
        }
        if(endDate) {
            data = data.filter(item => moment(item.rdate).diff(moment(moment(endDate).format("DD-MM-YYYY"))) < 0);
        }
        
        return {
            data,
            startDate,
            endDate
        };
    }
)