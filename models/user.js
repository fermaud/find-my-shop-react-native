class User {
  constructor(id, firstName, lastName, mail, imageUrl, created, isAdmin, isFirstConnection, isVerified, lastConnexion, plan, stripeUserId) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.imageUrl = imageUrl;
    this.created = created;
    this.isAdmin = isAdmin;
    this.isFirstConnection = isFirstConnection;
    this.isVerified = isVerified;
    this.lastConnexion = lastConnexion;
    this.plan = plan;
    this.stripeUserId = stripeUserId;
  }
}

export default User;
