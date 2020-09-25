const GetProductListReducer = (state = {}, action) => {
    switch (action.type) {

        case 'FETCHING_PRODUCTS_LIST':
            return Object.assign({}, state, {
                fetching: true,
                fetchProductList: {}
            });

        case 'FETCHING_PRODUCTS_LIST_SUCCESS':
            return Object.assign({}, state, {
                fetching: false,
                fetchProductList: action.payload.data

            });

        case 'FETCHING_PRODUCTS_LIST_FAILED':
            return Object.assign({}, state, {
                fetching: false,
                fetchProductList: {}
            });
        case 'FETCHING_PRODUCTS_LIST_RESET':
            return Object.assign({}, state, {
                fetching: false,
                fetchProductList: {}
            });
        default:
            return state;
    }

}

export default GetProductListReducer;