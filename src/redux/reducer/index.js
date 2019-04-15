import {
    LOAD_DATA_RESPONSE,
    LOAD_DATA_ERROR, GRAPH_START_DATE,
    GRAPH_END_DATE,
    GRAPH_TYPE,
    LOAD_ORGANISATION_RESPONSE,
    SELECTED_CHART_TYPE
} from '../action';
import Immutable from 'immutable';

import { CHART_TYPES } from '../constants';


const INITIAL_REDDIT_STATE = Immutable.fromJS({
    graph: {
        data: [],
        start: '',
        end: '',
        type: 'none'
    },
    chartTypeFilter: {
        types: CHART_TYPES,
        selected: 'line'
    },
    organisation: [],
    result: [1, 2, 3, 4],
    error: {
        msg: "Something went wrong!!!",
        isError: false
    }
});
const reducer = (state = INITIAL_REDDIT_STATE, action) => {
    switch (action.type) {
        case LOAD_DATA_RESPONSE:
            return state
                .setIn(["graph", "data"], Immutable.fromJS(action.data))

        case LOAD_ORGANISATION_RESPONSE:
            return state
                .set("organisation", Immutable.fromJS(action.data))

        case GRAPH_START_DATE:
            return state
                .setIn(['graph', 'start'], action.startDate)

        case GRAPH_END_DATE:
            return state
                .setIn(['graph', 'end'], action.endDate)

        case GRAPH_TYPE:
            return state
                .setIn(['graph', 'type'], action.graphType)

        case SELECTED_CHART_TYPE:
            return state
                .setIn(['chartTypeFilter', 'selected'], action.chartType)
        default:
            return state;
    }
};
export default reducer;