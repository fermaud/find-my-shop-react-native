import { ARTICLES } from "../../data/dummy-data";
// import {  } from '../actions/articles';

const initialState = {
  articles: ARTICLES
};

const articlesRecucer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
  return state;
};

export default articlesRecucer;
