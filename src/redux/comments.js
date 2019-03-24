import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

//Remark : THis is reducer , 

// Reducers specify how the application's state changes in response to actions sent to the store. 
// Remember that actions only describe what happened, 
// but don't describe how the application's state changes.

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment);
        default:
          return state;
      }
};