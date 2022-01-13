import { ADD_HABIT } from '../constants/actionTypes';
import { DONE, NOT_DONE, NONE } from '../constants/habitStatus';

const initialState = {
  habits: [
    {
      title: 'Go to Gym',
      description: 'Workout for atleast 30 minutes',
      consistency: [
        {
          day: 1,
          status: DONE,
        },
        {
          day: 2,
          status: NOT_DONE,
        },
        {
          day: 3,
          status: NONE,
        },
        {
          day: 4,
          status: DONE,
        },
        {
          day: 5,
          status: NONE,
        },
        {
          day: 6,
          status: NOT_DONE,
        },
        {
          day: 7,
          status: NOT_DONE,
        },
      ],
    },
    {
      title: 'Read a book',
      description: 'Try to finish atleast one book',
      consistency: [
        {
          day: 1,
          status: NONE,
        },
        {
          day: 2,
          status: NONE,
        },
        {
          day: 3,
          status: NONE,
        },
        {
          day: 4,
          status: DONE,
        },
        {
          day: 5,
          status: DONE,
        },
        {
          day: 6,
          status: NOT_DONE,
        },
        {
          day: 7,
          status: DONE,
        },
      ],
    },
    {
      title: 'Cook food',
      description: 'Learn to cook healty meals',
      consistency: [
        {
          day: 1,
          status: DONE,
        },
        {
          day: 2,
          status: NOT_DONE,
        },
        {
          day: 3,
          status: NONE,
        },
        {
          day: 4,
          status: NONE,
        },
        {
          day: 5,
          status: DONE,
        },
        {
          day: 6,
          status: DONE,
        },
        {
          day: 7,
          status: NOT_DONE,
        },
      ],
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
