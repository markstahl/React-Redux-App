import { combineReducers } from 'redux';
import { holidaysReducer } from './holidaysReducer';

export const rootReducer = combineReducers({holidaysReducer});