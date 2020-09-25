import axios from 'axios';

export const GetProductListAction = (array) => {

    return (dispatch, getState) => {
        dispatch({
            type: 'FETCHING_PRODUCTS_LIST', 
            payload: { 
                fetching: true, 
                data: {} 
            } 
        });

        axios({
            method: 'GET',
            url: "/setups/cartOperation/fetchProducts",
            headers:{
              'Access-Control-Allow-Origin':'*',
              'Content-Type': 'application/json;charset=UTF-8',
          }
          }).then(response => {
            dispatch({ 
                type: 'FETCHING_PRODUCTS_LIST_SUCCESS', 
                payload: { 
                    fetchingData: false, 
                    data: response.data 
                } 
            });
        }).catch(e => {
            dispatch({ 
                type: 'FETCHING_PRODUCTS_LIST_FAILED', 
                payload: { 
                    fetchingData: false, 
                    data: e 
                } 
            });
        });
    }
}

export const resetFetchingProducts = () => {
    return (dispatch) => {
      dispatch({
        type: 'FETCHING_PRODUCTS_LIST_RESET',
        payload: {
          fetching: false,
          data: {}
        }
      });
    }
  }