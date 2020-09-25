import axios from 'axios';
import { LOOKUP_CONTROLLER_URL } from './settings';

export const GetTotalPriceAction = (val,id) => {

    return (dispatch, getState) => {
        dispatch({
            type: 'FETCHING_GET_TOTAL_PRICE', 
            payload: { 
                fetching: true, 
                data: {} 
            } 
        });

        axios({
            method: 'GET',
            url: "/setups/cartOperation/getTotalPrice?itemCount="+val + "&&id="+id,
            headers:{
              'Access-Control-Allow-Origin':'*',
              'Content-Type': 'application/json;charset=UTF-8',
          }
          }).then(response => {
            dispatch({ 
                type: 'FETCHING_GET_TOTAL_PRICE_SUCCESS', 
                payload: { 
                    fetchingData: false, 
                    data: response.data 
                } 
            });
        }).catch(e => {
            dispatch({ 
                type: 'FETCHING_GET_TOTAL_PRICE_FAILED', 
                payload: { 
                    fetchingData: false, 
                    data: e 
                } 
            });
        });
    }
}

export const resetFetchingTotalPrice = () => {
    return (dispatch) => {
      dispatch({
        type: 'FETCHING_GET_TOTAL_PRICE_RESET',
        payload: {
          fetching: false,
          data: {}
        }
      });
    }
  }