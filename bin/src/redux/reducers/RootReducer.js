import { combineReducers } from "redux";
import FormDataReducer from "./FormDataReducer";


export default combineReducers(
  // This would produce the following state object
  {
    globalData : FormDataReducer
  }
);
