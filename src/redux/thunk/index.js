import * as moment from 'moment';

import { LOAD_DATA_RESPONSE, LOAD_ORGANISATION_RESPONSE } from '../action';
import { API } from '../../api';
/*
const uuidv4 = require('uuid/v4');
const COMPETITORS_TYPE = [
    {
        id: 1,
        label: 'WellCare',
    },
    {
        id: 2,
        label: 'United HealthCare',
    },
    {
        id: 3,
        label: 'Humana',
    },
    {
        id: 4,
        label: 'HealthSpring of Florida',
    },
    {
        id: 5,
        label: 'Florida Blue',
    }
]


const PRODUCT_TYPE = [
    {
        id: 1,
        label: 'MAPD',
    },
    {
        id: 2,
        label: 'MA',
    },
    {
        id: 3,
        label: 'SNP',
    },
    {
        id: 4,
        label: 'PDP',
    },
    {
        id: 5,
        label: 'Product 4',
    }
]

const PLAN_TYPE = [
    {
        id: 1,
        label: 'PPO',
    },
    {
        id: 2,
        label: 'HMO',
    },
    {
        id: 3,
        label: 'LPPO',
    },
    {
        id: 4,
        label: 'PDP',
    },
    {
        id: 5,
        label: 'Plan 4',
    }
]

const REGION_TYPE = [
    {
        id: 1,
        label: 'North West',
    },
    {
        id: 2,
        label: 'North East',
    },
    {
        id: 3,
        label: 'Central',
    },
    {
        id: 4,
        label: 'South West',
    },
    {
        id: 4,
        label: 'South East',
    }
]


const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const types = ['Career', 'Frequency', 'Medical', 'Hobby', 'Journey'];
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
                        "OrganizationName": COMPETITORS_TYPE[Math.floor(Math.random() * COMPETITORS_TYPE.length)].label,
                        "PlanCode":"H"+ (Math.floor(Math.random() * 1000) + 32),
                        "PBP":(Math.floor(Math.random() * 125)),
                        "Segment": (Math.floor(Math.random() * 10)),
                        "PlanName":"WellCare Access (HMO SNP) - "+(Math.floor(Math.random() * 200)),
                        "Product": PRODUCT_TYPE[Math.floor(Math.random() * PRODUCT_TYPE.length)].label,
                        "PlanType": PLAN_TYPE[Math.floor(Math.random() * PLAN_TYPE.length)].label,
                        "Region": REGION_TYPE[Math.floor(Math.random() * REGION_TYPE.length)].label,
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