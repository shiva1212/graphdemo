import { LOAD_DATA_RESPONSE, LOAD_DATA_ERROR, GRAPH_START_DATE, GRAPH_END_DATE } from '../action';
import Immutable from 'immutable';
const moment = require('moment');

const NUMBER_OF_NODES = 25;
const  types = ['Career', 'Frequency', 'Medical', 'Hobby', 'Journey'];

const dummyData = () => {
    let dummyArray = [];
    for(let i = 0; i < NUMBER_OF_NODES; i++){
        const rDate  = moment(moment().add("days", (Math.floor(Math.random() * 10) + 1))).format("DD-MM-YYYY");
        dummyArray.push(
            {
                "name": "Point "+ (i + 1),
                "uv": (Math.floor(Math.random() * 5000) + 1500),
                "pv": (Math.floor(Math.random() * 3000) + 1500),
                "amt": (Math.floor(Math.random() * 2000) + 1500),
                "type": types[Math.floor(Math.random() * types.length)],
                "rdate": rDate

            }
        );
        console.log(rDate)
    }
    return dummyArray;
}
const data = dummyData();

const INITIAL_REDDIT_STATE = Immutable.fromJS({
    graph: {
        data,
        start: '',
        end: '',
        type: '' 
    },
    result: [1,2,3, 4],
    error: {
        msg: "Something went wrong!!!",
        isError: false
    }
});
const reducer = (state = INITIAL_REDDIT_STATE, action) => {
    switch (action.type) {
        case LOAD_DATA_RESPONSE:
            return state
                .set("result", [4, 3, 2, 1])

        case GRAPH_START_DATE:
            return state
                .setIn(['graph', 'start'], action.startDate)

        case GRAPH_END_DATE:
            return state
                .setIn(['graph', 'end'], action.endDate)
        default:
            return state;
    }
};
export default reducer;