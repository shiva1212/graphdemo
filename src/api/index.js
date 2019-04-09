import axios from 'axios';

const GRAPH_API_URL = 'mockData/mock.json';
export const API = {
    getGraphData: () => axios.get(GRAPH_API_URL)
}