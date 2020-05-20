import { doGetCall, doPostCall, doPutCall , doDeleteCall} from "./Common";
import moment from "moment";

export const getList = () => {
    const url = 'tea/';
    return doGetCall(url);

}

export const createItem = (body) => {
    console.log(body,"IN CREATE ITEM")
    const url = 'tea/';
    return doPostCall(url,body);
}

export const updateItem = (body, id) => {
    return doPutCall(`tea/${id}/`, body);
}


export const deleteItem = async (id) => {
    return doDeleteCall(`tea/${id}/`);
}