class Article {
  constructor(id, title, imageUrl, price, description, shopId, shopName, shopLocality, shopCoordinates, shopCoverPictureUrl, shopLogoUrl) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
    this.shopId = shopId;
    this.shopInfos = {
      id: shopId,
      title: shopName,
      locality: shopLocality,
      coordinates: shopCoordinates,
      coverUrl: shopCoverPictureUrl,
      logoUrl: shopLogoUrl
    };
  }
}

export default Article;
