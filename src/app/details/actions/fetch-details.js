import axios from 'axios'

export function fetchDetails(id) {
    return function (dispatch) {
        dispatch({
            type: 'REQUEST_DETAILS_START',
            payload: null
        });
        axios.get(`http://localhost:1616/api/items/${id}`)
            .then((response) => {
                if (response.data) {
                    dispatch({
                        type: 'REQUEST_DETAILS_SUCCESS',
                        payload: response.data
                    })
                    dispatch({
                        type: 'REQUEST_DETAILS_END',
                        payload: true
                    })
                }
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type: "REQUEST_DETAILS_FAILED",
                    payload: err
                })
            })
    }
}

export function fetchDetailsFromServer(id) {
    return function (dispatch) {
        dispatch({
            type: 'REQUEST_DETAILS_START',
            payload: null
        });
        return axios.get(`http://localhost:1616/api/items/${id}`)

    }
}