const GetAllProductsListReducer = (state = {}, action) => {
    switch (action.type) {

        case 'FETCHING_ALL_PRODUCTS_LIST':
            return Object.assign({}, state, {
                fetching: true,
                productList: {}
            });

        case 'FETCHING_ALL_PRODUCTS_LIST_SUCCESS':
            return Object.assign({}, state, {
                fetching: false,
                productList: action.payload.data

            });

        case 'FETCHING_ALL_PRODUCTS_LIST_FAILED':
            return Object.assign({}, state, {
                fetching: false,
                productList: {}
            });
        case 'FETCHING_ALL_PRODUCTS_LIST_RESET':
            return Object.assign({}, state, {
                fetching: false,
                productList: {}
            });
        default:
            return state;
    }

}

export default GetAllProductsListReducer;