export const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST';
export const LOAD_DATA_RESPONSE = 'LOAD_DATA_RESPONSE';
export const LOAD_DATA_ERROR = "LOAD_DATA_ERROR";

export const requestData = (data) => ({
    type: LOAD_DATA_RESPONSE,
    data
});