const FormDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "DATALOADING_TEXTBOX":      
      return Object.assign({}, state, {        
        [action.payload.data.name]: action.payload.data.value
      });

    default:
      return state;
  }
};

export default FormDataReducer;
