import { combineReducers } from 'redux';
import app from './app';
import structure from './structure';

let reducers = {
  app,
  structure
};

export default combineReducers(reducers)
