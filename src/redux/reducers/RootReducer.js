import { combineReducers } from "redux";
import FormDataReducer from "./FormDataReducer";
import saveFormDataReducer from "./saveFormDataReducer";
import GetProductListReducer from "./GetProductListReducer";
import GetTotalPriceReducer from "./GetTotalPriceReducer";
import GetAllProductsListReducer from "./GetAllProductsListReducer";


export default combineReducers(
  // This would produce the following state object
  {
    globalData : FormDataReducer,
    savedSetupProducts : saveFormDataReducer,
    fetchProductList : GetProductListReducer,
    fetchTotalPrice : GetTotalPriceReducer,
    productList : GetAllProductsListReducer
  }
);
