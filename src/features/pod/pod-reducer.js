import { SET_POD_SUCCESS } from './pod-actions';

const initialState = {};
const podReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default podReducer;
