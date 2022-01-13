import { ADD_HABIT } from '../constants/actionTypes';

const initialState = {
  habits: [
    {
      id: 1,
      title: 'Go to Gym',
      description: 'Workout for atleast 30 minutes',
    },
    {
      id: 2,
      title: 'Read a book',
      description: 'Try to finish atleast one book',
    },
    {
      id: 3,
      title: 'Cook food',
      description: 'Learn to cook healty meals',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      return state;
    default:
      return state;
  }
};

export default reducer;
