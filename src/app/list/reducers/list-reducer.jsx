export const listReducer = (state = { items: [], loading: false }, action) => {
    switch (action.type) {
        case ('REQUEST_LIST_SUCCESS'): {
            let newState = { ...state, data: action.payload, loading: false };
            return newState;
            break;
        }
        case ('REQUEST_LIST_START'): {
            return { ...state, loading: true, items: null };
            break;
        }
            return state;
    };
    return state;
}