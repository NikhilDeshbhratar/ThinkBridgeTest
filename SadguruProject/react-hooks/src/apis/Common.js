import * as Axios from 'axios';
export const BASE_URL = `http://127.0.0.1:8000/api`;

export const doPostCall = async (url, body) => {
    try {
        url = `${BASE_URL}/${url}`;
        const result = await Axios.post(url, body);
        return {...result.data, variant: 'success'};
    } catch (error) {
        return {message: error.response.data.detail, variant: 'error'};
    }
}

export const doGetCall = async (url, params={}) => {
    url = `${BASE_URL}/${url}`;
    try {
        const result = await Axios.get(url, {params});
        return result.data; 
    } catch (error) {
        return {message: error.response.data.detail, variant: 'error'};
    }
}

export const doPutCall = async (url, body) => {
    try {
        url = `${BASE_URL}/${url}`;
        const result = await Axios.put(url, body);
        return {...result.data, variant: 'success'};
    } catch (error) {
        return {message: error.response.data.detail, variant: 'error'};
    }
}

export const doDeleteCall = async (url) => {
    try {
        url = `${BASE_URL}/${url}`;
        const result = await Axios.delete(url);
        return {...result.data, variant: 'success'};
    } catch (error) {
        return {message: error.response.data.detail, variant: 'error'};
    }
}