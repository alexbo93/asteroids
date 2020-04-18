import { SET_ASTEROIDS_SUCCESS } from './asteroids-actions';

const initialState = [];
const asteroidsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ASTEROIDS_SUCCESS:
      return action.payload.items;
    default:
      return state;
  }
};

export default asteroidsReducer;
