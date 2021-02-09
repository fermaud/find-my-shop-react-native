import { SET_SUGGESTED_ARTICLE, SET_SELECTED_ARTICLE, SET_FOUNDED_ARTICLES } from "../actions/articles";

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
  suggestedArticles: [],
  foundedArticles: []
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
    case SET_FOUNDED_ARTICLES:
      return {
        ...state,
        foundedArticles: action.articles
      };
    default:
      return state;
  }
};

export default articlesRecucer;
