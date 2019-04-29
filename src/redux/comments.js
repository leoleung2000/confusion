import * as ActionTypes from './ActionTypes';

//Remark : THis is reducer , 

// Reducers specify how the application's state changes in response to actions sent to the store. 
// Remember that actions only describe what happened, 
// but don't describe how the application's state changes.

export const Comments = (state = { errMess: null, comments:[]}, action) => {
    switch (action.type) {
      case ActionTypes.ADD_COMMENTS:
        return {...state, errMess: null, comments: action.payload};
  
      case ActionTypes.COMMENTS_FAILED:
        return {...state, errMess: action.payload};
  
      case ActionTypes.ADD_COMMENT:
          var comment = action.payload;
          return { ...state, comments: state.comments.concat(comment)};
  
      default:
        return state;
    }
  };