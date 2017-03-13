export const listReducer = (state = { data: [], loading: false }, action) => {
    switch (action.type) {
        case ('REQUEST_LIST_SUCCESS'): {
            return { ...state, data: action.payload, loading: false };
            break;
        }
        case ('REQUEST_LIST_START'): {
            return { ...state, loading: true, data: [] };
            break;
        }
            return state;
    };
    return state;
}