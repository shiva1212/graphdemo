import { LOAD_DATA_RESPONSE, LOAD_DATA_ERROR } from '../action';

import Immutable from 'immutable';


const data = [
    {
        "name": "Point A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Point B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Point C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Point D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Point E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Point F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Point G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
]

const INITIAL_REDDIT_STATE = Immutable.fromJS({
    graphData: data,
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
                    .set("result", [4,3,2,1])
        default:
            return state;
    }
};
export default reducer;