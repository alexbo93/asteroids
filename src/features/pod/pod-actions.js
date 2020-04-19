export const GET_POD = 'GET_POD';
export const SET_POD_SUCCESS = 'SET_POD_SUCCESS';

export const getPod = () => ({
  type: GET_POD,
});

export const setPodSuccess = (payload) => ({
  type: SET_POD_SUCCESS,
  payload,
});
