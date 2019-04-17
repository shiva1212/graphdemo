import * as moment from 'moment';

import { LOAD_DATA_RESPONSE, LOAD_ORGANISATION_RESPONSE } from '../action';
import { API } from '../../api';
/*
const uuidv4 = require('uuid/v4');

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const types = ['Career', 'Frequency', 'Medical', 'Hobby', 'Journey'];
const DIRECTION = ['North', 'East', 'West', 'South'];
const COUNTY = ['DeSoto', 'HighLands', 'Charlotte', 'Glades', 'Lee', 'Hendry', 'Collier', 'Palm Beach', 'Broward', 'Miami-Dade', 'Monroe'];
const dummyData = () => {
    let dummyArray = [];
    
    for (let i = 0; i < MONTHS.length; i++) {
        const dMonth = moment().month(i);
        const mDays = dMonth.daysInMonth();
        for (let j = 0; j < mDays; j++) {
            const mdate = moment().year(2019).month(i).date(j);
            const ID = uuidv4();
            const county = COUNTY[Math.floor(Math.random() * COUNTY.length)];
            dummyArray.push(
                {
                    ID,
                    "name": dMonth.format("MMM")+"-"+mdate.date(),
                    "uv": (Math.floor(Math.random() * 5000) + 1500),
                    "pv": (Math.floor(Math.random() * 3000) + 1500),
                    "amt": (Math.floor(Math.random() * 2000) + 1500),
                    "type": types[Math.floor(Math.random() * types.length)],
                    "rdate": mdate.format("MM-DD-YYYY"),
                    county: {
                        name: county,
                        selected: true
                    },
                    organisation: {
                        "OrganizationName": "WellCare - "+ (Math.floor(Math.random() * 200)),
                        "PlanCode":"H"+ (Math.floor(Math.random() * 1000) + 32),
                        "PBP":(Math.floor(Math.random() * 125)),
                        "Segment": (Math.floor(Math.random() * 10)),
                        "PlanName":"WellCare Access (HMO SNP) - "+(Math.floor(Math.random() * 200)),
                        "Product": "SNP - "+(Math.floor(Math.random() * 200)),
                        "PlanType": "HMO (SNP) - "+(Math.floor(Math.random() * 200)),
                        "Region": DIRECTION[(Math.floor(Math.random() * DIRECTION.length))],
                        "County": county,
                        "NumofStatus":(Math.floor(Math.random() * 100)),
                        "CurentEnrollees": (Math.floor(Math.random() * 100)+ 30) + "k"
                    }
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
    let res  = response.filter(item => {
        const day = new Date(item.rdate).getDay();
        return day !== 0 && day !== 6;
    })
    return res.map(item => {
        item.name = moment(item.rdate).format('MMM')+"-"+moment(item.rdate).format('DD');
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