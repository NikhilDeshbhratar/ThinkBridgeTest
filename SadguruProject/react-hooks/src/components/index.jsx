import moment from "moment";

export function toTitleCase(str='') {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export function formatDate(date) {
    return moment(date).format('DD/MM/YYYY');
}







