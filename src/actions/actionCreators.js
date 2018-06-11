// add review
export function addReview(review) {
  return {
    type: 'ADD_REVIEW',
    review
  }
}

// remove review
export function removeReview(reviewId) {
  return {
    type: 'REMOVE_REVIEW',
    reviewId
  }
}
