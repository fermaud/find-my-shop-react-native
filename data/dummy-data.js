import Article from "../models/article";
import Shop from "../models/shop";

export const ARTICLES = [
  new Article("a1", "Short Bleu", "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/articles/5fd3b0a87e651eff5a208e85/1608056927317_img.png", "44.98", "Converse Shop"),
  new Article("a2", "FLEXI RUNNER - Baskets basses", "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/articles/5fd38a5464b9b7f1513a6e68/1607699069048_img.png", "29.98", "Adidas Shop"),
  new Article("a3", "BONO - Sweat à capuche", "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/articles/5fd386423d9da9ee876931d7/1607698034021_img.png", "19.98", "Adidas Shop"),
  new Article("a4", "LABOUR - Chemise", "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/articles/5fd3388e849c0ecdd0123563/1607697931340_img.png", "39.98", "Nike Shop")
];

export const SHOPS = [
  new Shop("s1", "Converse Shop", "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/stores/5fb66b9c297f8f19eec5c998/assets/1612187397614_cover.png", "Lyon 2", {
    latitude: 45.7663,
    longitude: 4.8355
  }),
  new Shop("s2", "Adidas Shop", "https://find-my-shop-public-assets.s3.eu-west-3.amazonaws.com/default-banner.jpg", "Fontaines sur saone", {
    latitude: 45.7667,
    longitude: 4.8467
  }),
  new Shop("s3", "Nike Shop", "https://find-my-shop-public-assets.s3.eu-west-3.amazonaws.com/default-banner.jpg", "Confluence", {
    latitude: 45.7671,
    longitude: 4.8374
  })
];
