import axios from 'axios';
import { LOOKUP_CONTROLLER_URL } from './settings';

export const saveFormDataAction = (array) => {

    let url = LOOKUP_CONTROLLER_URL + '/servicecheck';

    return (dispatch, getState) => {
        dispatch({
            type: 'FETCHING_SAVING_SETUP_PRODUCTS', 
            payload: { 
                fetching: true, 
                data: {} 
            } 
        });

        axios({
            method: 'POST',
            url: "/setups/products/saveProducts",
            headers:{
              'Access-Control-Allow-Origin':'*',
              'Content-Type': 'application/json;charset=UTF-8',
          },
          data : array
           /*  data: array,
             'headers': {
              'Content-Type': 'application/json',
              'Cache-Control': 'max-age=0, private, must-revalidate',
              'Pragma' : 'no-cache',
              'X-Requested-With': 'XMLHttpRequest'
            } */,
          }).then(response => {
            dispatch({ 
                type: 'SAVING_SAVING_SETUP_PRODUCTS_SUCCESS', 
                payload: { 
                    fetchingData: false, 
                    data: response.data 
                } 
            });
        }).catch(e => {
            dispatch({ 
                type: 'SAVING_SAVING_SETUP_PRODUCTS_FAILED', 
                payload: { 
                    fetchingData: false, 
                    data: e 
                } 
            });
        });
    }
}

export const resetSavingSetupProducts = () => {
    return (dispatch) => {
      dispatch({
        type: 'SAVE_SAVING_SETUP_PRODUCTS_RESET',
        payload: {
          fetching: false,
          data: {}
        }
      });
    }
  }