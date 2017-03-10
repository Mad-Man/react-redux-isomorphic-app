export const searchAction = (newValue) => {
    return {
        type: 'QUERY_CHANGED',
        payload: newValue
    }
}