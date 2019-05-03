import { createSelector } from 'reselect';
const moment = require('moment');

const graphSelector = state => state.get('graph')
const selectSelecterFilter = state => state.get('selectedFilter')
const chartTypeFilterSelector = state => state.get('chartTypeFilter')
export const selectGraphType = createSelector(
    graphSelector,
    (graph) => {
        const data = graph.get('data').toJS();
        let graphType = [];
        for (let i in data) {
            const val = data[i].type;
            if (graphType.indexOf(val) === -1) {
                graphType.push(val);
            }
        }
        return graphType;
    }
)

const filterGraph = (graph, selectedFilter) => {
    let data = graph.get('data').toJS();
    let type = graph.get('type');

    let org = selectedFilter.get('org');
    let region = selectedFilter.get('region');
    let planType = selectedFilter.get('planType');
    let product = selectedFilter.get('product');
    
    if (org.length > 0) {
        data = data.filter(item => item.organisation && org.indexOf(item.organisation.OrganizationName) > -1);
    }

    if (region.length > 0) {
        data = data.filter(item => item.organisation && region.indexOf(item.organisation.Region) > -1);
    }

    if (planType.length > 0) {
        data = data.filter(item => item.organisation && planType.indexOf(item.organisation.PlanType) > -1);
    }

    if (product.length > 0) {
        data = data.filter(item => item.organisation && product.indexOf(item.organisation.Product) > -1);
    }


    if (type !== 'none') {
        data = data.filter(item => item.type === type);
    }


    return {
        data, 
        type
    }
}

export const selectOrganisation = createSelector(
    graphSelector, selectSelecterFilter,
    (graph, selectedFilter) => {
        let { data, type } = filterGraph(graph, selectedFilter);
        let startDate = graph.get('start');
        let endDate = graph.get('end');
        
        if (startDate) {
            data = data.filter(item => {
                const flag = new Date(item.rdate).getTime() >= new Date(moment(startDate).format("MM-DD-YYYY")).getTime();
                return flag;
            });
        }
        if (endDate) {
            data = data.filter(item => {
                const flag = new Date(item.rdate).getTime() <= new Date(moment(endDate).format("MM-DD-YYYY")).getTime();
                return flag;
            });
        }

        data = data.map(item => {
            return item.organisation
        });
        return data;
    }
)

export const selectBarGraph = createSelector(
    graphSelector, selectSelecterFilter,
    (graph, selectedFilter) => {

        let { data, type } = filterGraph(graph, selectedFilter);
        let startDate = graph.get('start');
        let endDate = graph.get('end');

        data = data.map((item, index) => {
            item.name = item.county.name;
            return item;
        });


        if (startDate) {

            data = data.filter(item => {
                const flag = new Date(item.rdate).getTime() >= new Date(moment(startDate).format("MM-DD-YYYY")).getTime();
                return flag;
            });
        }
        if (endDate) {
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

export const selectGlobalFilters = createSelector(
    graphSelector,
    (graph) => {
        let data = graph.get('data').toJS();
        let org = [];
        let region = [];
        let planType = [];
        let product = [];
        data.forEach(element => {
            if (element.organisation) {

                if (org.indexOf(element.organisation.OrganizationName) === -1) {
                    org.push(element.organisation.OrganizationName);
                }

                if (planType.indexOf(element.organisation.PlanType) === -1) {
                    planType.push(element.organisation.PlanType);
                }

                if (product.indexOf(element.organisation.Product) === -1) {
                    product.push(element.organisation.Product);
                }

                if (region.indexOf(element.organisation.Region) === -1) {
                    region.push(element.organisation.Region);
                }
            }
        });
        return {
            org,
            region,
            planType,
            product
        }
    }
)




export const selectSelectedGlobalFilter = createSelector(
    selectSelecterFilter,
    (sf) => {
        return sf.toJS();
    }
)

export const selectChartType = createSelector(
    chartTypeFilterSelector,
    (ctf) => {
        return ctf.toJS();
    }
)

export const selectLineGraph = createSelector(
    graphSelector, selectSelecterFilter,
    (graph, selectedFilter) => {
        let { data, type } = filterGraph(graph, selectedFilter);

        let startDate = graph.get('start');
        let endDate = graph.get('end');

        const MAXIMUM = data.length > 0 && data.reduce(function (p, v) {
            return (p.pv > v.pv ? p : v);
        });

        if (MAXIMUM.pv) {
            const MAXIMUM_VALUE = MAXIMUM.pv;
            data = data.map((item, index) => {
                item.pv = Math.floor((item.pv / MAXIMUM_VALUE) * 100);
                return item;
            });
        }

        if (startDate) {

            data = data.filter(item => {
                const flag = new Date(item.rdate).getTime() >= new Date(moment(startDate).format("MM-DD-YYYY")).getTime();
                return flag;
            });
        }
        if (endDate) {
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