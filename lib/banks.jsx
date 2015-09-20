Banks = new Mongo.Collection("banks");

if (Meteor.isServer) {
  // Only publish tasks that are public or belong to the current user
  Meteor.publish("banks", function () {
    return Banks.find({
      owner: this.userId
    });
  });
}

Meteor.methods({
  addBank(name) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    Banks.insert({
      name: name,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
      gameId: Games.currentGame()._id
      // customers:
    });
  }
});
