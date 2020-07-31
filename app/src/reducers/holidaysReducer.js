import { LOAD_DATA, DATA_LOADED } from '../actions';

const initialState = {
  holidays: [],
  isLoading: false
};

export const holidaysReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_DATA:
      return {
        ...state,
        isLoading: true
      }
    case DATA_LOADED:
      return {
        ...state,
        holidays: action.payload,
        isLoading: false,
      }
    default:
      return state;
  }
}