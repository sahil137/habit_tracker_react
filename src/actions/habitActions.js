import { ADD_HABIT, UPDATE_HABIT_STATUS } from '../constants/actionTypes';

export const addHabit = (habit) => {
  return {
    type: ADD_HABIT,
    payload: habit,
  };
};

export const updateStatus = (habit) => {
  return {
    type: UPDATE_HABIT_STATUS,
    payload: habit,
  };
};
