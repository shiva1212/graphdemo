import * as moment from 'moment';

import { LOAD_DATA_RESPONSE, LOAD_ORGANISATION_RESPONSE } from '../action';
import { API } from '../../api';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const types = ['Career', 'Frequency', 'Medical', 'Hobby', 'Journey'];
/*const dummyData = () => {
    let dummyArray = [];
    for (let i = 0; i < MONTHS.length; i++) {
        const dMonth = moment().month(i);
        const mDays = dMonth.daysInMonth();
        for (let j = 0; j < mDays; j++) {
            const mdate = moment().year(2019).month(i).date(j);
            dummyArray.push(
                {
                    "name": dMonth.format("MMM")+"-"+mdate.date(),
                    "uv": (Math.floor(Math.random() * 5000) + 1500),
                    "pv": (Math.floor(Math.random() * 3000) + 1500),
                    "amt": (Math.floor(Math.random() * 2000) + 1500),
                    "type": types[Math.floor(Math.random() * types.length)],
                    "rdate": mdate.format("MM-DD-YYYY")

                }
            );
        }     
    }
    return dummyArray;
}
const data = dummyData();
console.log(JSON.stringify(data))
*/

const updateMockDate = (response) => {
    return response.map(item => {
        item.name = moment(item.rdate).format('MMMM')+"-"+moment(item.rdate).format('DD');
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



export const requestOrganisationData = () => {
    return (dispatch, getState) => {
        API.getOrganisationData()
            .then(response => {
                console.log(response.data.mockData)
                //const res = updateMockDate(response.data.mockData);
               dispatch({type: LOAD_ORGANISATION_RESPONSE, data: response.data.mockData});   
            })
            .catch(error => {
                console.log(error);
            })
    }
}