import * as ActionTypes from './ActionTypes';

//Actions are payloads of information that send data from your application to your store. 
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId : dishId,
        rating : rating,
        author : author,
        comment: comment
    }
});