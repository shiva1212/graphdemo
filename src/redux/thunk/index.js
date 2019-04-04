import { LOAD_DATA_RESPONSE } from '../action'

export const requestData = () => {
    return (dispatch, getState) => {
        console.log("test")
        dispatch({type : LOAD_DATA_RESPONSE});
    }
}