export const detailsReducer = (state = { details: {}, loading: true, error: null }, action) => {
    switch (action.type) {
        case ('REQUEST_DETAILS_START'): {
            return { ...state, loading: true, details: {} }
            break;
        }
        case ('REQUEST_DETAILS_END'): {
            return { ...state, loading: false }
            break;
        }
        case ('REQUEST_DETAILS_FAILED'): {
            return { ...state, loading: false, details: {}, error: action.error }
            break;
        }
        case ('REQUEST_DETAILS_SUCCESS'): {
            return { ...state, details: action.payload }
            break;
        }
            return state;
    }
    return state;
}