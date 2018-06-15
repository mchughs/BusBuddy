import { database } from '../Firebase'
export const FETCH_POSTS = 'fetch_posts'

export function fetchReviews(){
  return dispatch => {
    database.on('value', snapshot => {
      dispatch({
        type: 'FETCH_REVIEWS',
        reviews: snapshot.val()
      });
    });
  }
}

// add review
export function addReview(review) {
  // return {
  //   type: 'ADD_REVIEW',
  //   review
  // }
  return dispatch => database.push(review)
}

// remove review
export function removeReview(reviewId) {
  // return {
  //   type: 'REMOVE_REVIEW',
  //   reviewId
  // }
  return dispatch => database.child(reviewId).remove();
}
