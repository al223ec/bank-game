Customers = new Mongo.Collection("customers");

if (Meteor.isServer) {
  // Only publish tasks that are public or belong to the current user
  Meteor.publish("customers", function () {
    return Customers.find();
  });
}

Meteor.methods({
  addCustomer(bankId) {
    // Make sure the user is logged in before inserting a bank
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    var customer = Customers.insert({
      name: faker.name.findName(),
      bankId: bankId,
      createdAt: new Date(),
      userId: Meteor.userId(),
      username: Meteor.user().username,
      gameId: Games.currentGame()._id,
      mortgageRate: 1.59,
      profitAndLoss: []
      // customers: 1000
    });
  }
});
