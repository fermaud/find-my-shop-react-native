import axios from "axios";
import Article from "../../models/article";
import ENV from "../../env";

export const SET_SUGGESTED_ARTICLE = "SET_SUGGESTED_ARTICLE";
export const SET_SELECTED_ARTICLE = "SET_SELECTED_ARTICLE";

// Requests
const getArticlesByQuery = (token, query) => {
  return axios.get(ENV.API_BASE_URL + "algolia-search/ARTICLE?isOnline=true", {
    headers: {
      Authorization: "JWT " + token
    }
  });
};

const getArticleById = (token, articleId) => {
  return axios.get(ENV.API_BASE_URL + "article/" + articleId, {
    headers: {
      Authorization: "JWT " + token
    }
  });
};
// Requests

const mapArticle = (item) => {
  const mappedItem = new Article(
    item._id,
    item.title,
    item.thumbnailPathSignedUrl,
    item.price || 0,
    item.descriptionWithoutHtml || "",
    item.attachedStore._id,
    item.attachedStore.title,
    item.attachedStore.locality,
    item.attachedStore.coordinates,
    item.attachedStore.thumbnailCoverPathSignedUrl,
    item.attachedStore.thumbnailCompanyPathSignedUrl
  );
  return mappedItem;
};

export const fetchSuggestedArticles = () => {
  return async (dispatch, getState) => {
    try {
      const token = getState().auth.token;
      const response = await getArticlesByQuery(token, "?isOnline=true");
      if (!response.data.status) {
        console.log(response.data);
        throw new Error(response.data.message);
      }
      const data = response.data.data;
      const loadedArticles = [];
      for (let item of data) {
        const article = mapArticle(item);
        loadedArticles.push(article);
      }
      dispatch({ type: SET_SUGGESTED_ARTICLE, articles: loadedArticles });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const fetchArticleById = (articleId) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().auth.token;
      const response = await getArticleById(token, articleId);
      if (!response.data.status) {
        console.log(response.data);
        throw new Error(response.data.message);
      }
      const data = response.data.data;
      const article = mapArticle(data);
      dispatch({ type: SET_SELECTED_ARTICLE, article: article });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
