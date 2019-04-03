export const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST';
export const LOAD_DATA_RESPONSE = 'LOAD_DATA_RESPONSE';
export const LOAD_DATA_ERROR = "LOAD_DATA_ERROR";
export const GRAPH_START_DATE = "GRAPH_START_DATE";
export const GRAPH_END_DATE = "GRAPH_END_DATE";
export const GRAPH_TYPE = "GRAPH_TYPE";

export const requestData = (data) => ({
    type: LOAD_DATA_RESPONSE,
    data
});
export const startDate = (startDate) => ({
    type: GRAPH_START_DATE,
    startDate
});
export const endDate = (endDate) => ({
    type: GRAPH_END_DATE,
    endDate
});
export const graphType = (graphType) => ({
    type: GRAPH_TYPE,
    graphType
});