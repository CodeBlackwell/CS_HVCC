import axios from 'axios';
import { FETCH_INSTRUCTORS } from '../constants/homepage_constants';


export function fetchInstructors () {
    const request = axios.get('/data');

    return { type: FETCH_INSTRUCTORS, payload: request }
}
