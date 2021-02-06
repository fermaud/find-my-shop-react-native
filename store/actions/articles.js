import axios from "axios";
import Article from "../../models/article";

export const SET_SUGGESTED_ARTICLE = "SET_SUGGESTED_ARTICLE";
export const SET_SELECTED_ARTICLE = "SET_SELECTED_ARTICLE";

const BASE_URL = "https://api.find-my-shop.com/public/";

export const fetchSuggestedArticles = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(BASE_URL + "algolia-search/ARTICLE", {
        headers: {
          // "Content-Type": "application/json",
          Authorization: "JWT " + "514656465"
        }
      });
      if (!response.data.status) {
        console.log("ERROR");
        return response.data;
      }

      const data = response.data.data;
      const loadedArticles = [];
      for (let item of data) {
        const newArticle = new Article(
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
        loadedArticles.push(newArticle);
      }

      dispatch({ type: SET_SUGGESTED_ARTICLE, articles: loadedArticles });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const fetchArticleById = (articleId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(BASE_URL + "article/" + articleId, {
        headers: {
          // "Content-Type": "application/json",
          Authorization: "JWT " + "514656465"
        }
      });
      if (!response.data.status) {
        console.log("ERROR");
        return response.data;
      }
      const data = response.data.data;
      const newArticle = new Article(
        data._id,
        data.title,
        data.thumbnailPathSignedUrl,
        data.price || 0,
        data.descriptionWithoutHtml || "",
        data.attachedStore._id,
        data.attachedStore.title,
        data.attachedStore.locality,
        data.attachedStore.coordinates,
        data.attachedStore.thumbnailCoverPathSignedUrl,
        data.attachedStore.thumbnailCompanyPathSignedUrl
      );

      dispatch({ type: SET_SELECTED_ARTICLE, article: newArticle });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
