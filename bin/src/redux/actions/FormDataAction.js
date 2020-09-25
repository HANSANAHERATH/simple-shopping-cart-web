export const FormDataAction = data => {

  return (dispatch, getState) => {
    dispatch({
      type: "DATALOADING_TEXTBOX",
      payload: {        
        data: data
      }
    });
  };
};
