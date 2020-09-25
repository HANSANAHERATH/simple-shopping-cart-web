const GetTotalPriceReducer = (state = {}, action) => {
    switch (action.type) {

        case 'FETCHING_GET_TOTAL_PRICE':
            return Object.assign({}, state, {
                fetching: true,
                fetchTotalPrice: {}
            });

        case 'FETCHING_GET_TOTAL_PRICE_SUCCESS':
            return Object.assign({}, state, {
                fetching: false,
                fetchTotalPrice: action.payload.data

            });

        case 'FETCHING_GET_TOTAL_PRICE_FAILED':
            return Object.assign({}, state, {
                fetching: false,
                fetchTotalPrice: {}
            });
        case 'FETCHING_GET_TOTAL_PRICE_RESET':
            return Object.assign({}, state, {
                fetching: false,
                fetchTotalPrice: {}
            });
        default:
            return state;
    }

}

export default GetTotalPriceReducer;