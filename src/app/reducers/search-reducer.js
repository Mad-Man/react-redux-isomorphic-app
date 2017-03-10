export const searchReducer = (state = {query: null}, action) => {
    switch (action.type) {
        case ('QUERY_CHANGED'): {
            return { ...state, query: action.payload };
            break;
        }
        return state;
    };
    return state;
}