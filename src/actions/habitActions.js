import { ADD_HABIT, EDIT_HABIT, DELETE_HABIT } from '../constants/actionTypes';

export const addHabit = (habit) => {
  return {
    type: ADD_HABIT,
    payload: habit,
  };
};

export const editHabit = (habit) => {
  return {
    type: EDIT_HABIT,
    payload: habit,
  };
};

export const deleteHabit = (habit) => {
  return {
    type: DELETE_HABIT,
    payload: habit,
  };
};
