const saveFormDataReducer = (state = {}, action) => {
    switch (action.type) {

        case 'FETCHING_SAVING_SETUP_PRODUCTS':
            return Object.assign({}, state, {
                fetching: true,
                savedSetupProducts: {}
            });

        case 'SAVING_SAVING_SETUP_PRODUCTS_SUCCESS':
            return Object.assign({}, state, {
                fetching: false,
                savedSetupProducts: action.payload.data

            });

        case 'SAVING_SAVING_SETUP_PRODUCTS_FAILED':
            return Object.assign({}, state, {
                fetching: false,
                savedSetupProducts: {}
            });
        case 'SAVE_SAVING_SETUP_PRODUCTS_RESET':
            return Object.assign({}, state, {
                fetching: false,
                savedSetupProducts: {}
            });
        default:
            return state;
    }

}

export default saveFormDataReducer;