import * as moment from 'moment';

import { LOAD_DATA_RESPONSE } from '../action';
import { API } from '../../api';

const updateMockDate = (response) => {
    return response.map(item => {
        let rnd = Math.floor(Math.random() * 10) + 1;
        const rDate  = moment().add(rnd, "days");
        item.rdate =  rDate.format("MM-DD-YYYY");
        return item;
    });
}

export const requestData = () => {
    return (dispatch, getState) => {
        API.getGraphData()
            .then(response => {
                const res = updateMockDate(response.data.mockData);
                dispatch({type: LOAD_DATA_RESPONSE, data: res});   
            })
            .catch(error => {
                console.log(error);
            })
    }
}