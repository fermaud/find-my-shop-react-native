import { SET_SUGGESTED_ARTICLE, SET_SELECTED_ARTICLE } from "../actions/articles";

const initialState = {
  selectedArticle: {
    id: "",
    title: "",
    imageUrl: "",
    price: "",
    description: "",
    shopId: "",
    shopInfos: {
      id: "",
      title: "",
      locality: "",
      coordinates: "",
      coverUrl: "",
      logoUrl: ""
    }
  },
  suggestedArticles: []
};

const articlesRecucer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUGGESTED_ARTICLE:
      return {
        ...state,
        suggestedArticles: action.articles
      };
    case SET_SELECTED_ARTICLE:
      return {
        ...state,
        selectedArticle: action.article
      };
    default:
      return state;
  }
  return state;
};

export default articlesRecucer;
