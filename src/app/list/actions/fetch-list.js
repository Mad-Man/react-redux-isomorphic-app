import axios from 'axios'

export function fetchList(value) {
    return function (dispatch) {
        axios.get(`/api/items?q=${value}`)
            .then((response) => {
                if (response.data) {
                    dispatch({
                        type: 'REQUEST_LIST_SUCCESS',
                        payload: response.data
                    })
                }
            })
            .catch((err) => {
                dispatch({
                    type: "LIST_REQUEST_FAILED",
                    payload: err
                })
            })
    }
}

export function fetchListFromServer(value, host) {
    return function (dispatch) {
        return axios.get(`${host}/api/items?q=${value}`);
    }
}