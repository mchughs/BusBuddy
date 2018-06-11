// a reducer takes in two things:

// 1. the action
// 2. copy of current state

function reviews(state = [], action) {
  switch(action.type) {
    case 'ADD_REVIEW':
      break;
    default:
      return state;
  }
}

export default reviews;
