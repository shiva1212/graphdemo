import axios from 'axios';

const GRAPH_API_URL = 'mockData/mock.json';
const ORGANISATION_API_URL = 'mockData/organisation.json';
export const API = {
    getGraphData: () => axios.get(GRAPH_API_URL),
    getOrganisationData: () => axios.get(ORGANISATION_API_URL),
}