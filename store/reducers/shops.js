import { SHOPS } from "../../data/dummy-data";
// import {  } from '../actions/articles';

const initialState = {
  shops: SHOPS
};

const shopsRecucer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
  return state;
};

export default shopsRecucer;
