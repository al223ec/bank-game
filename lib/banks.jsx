Banks = new Mongo.Collection("banks");

if (Meteor.isServer) {
  // Only publish tasks that are public or belong to the current user
  Meteor.publish("banks", function () {
    return Banks.find();
  });
}
// // Publish a single post and its comments
// Meteor.publish("postAndComments", function (postId) {
//   // Check argument
//   check(postId, String);
//
//   return [
//     Posts.find({ _id: postId }),
//     Comments.find({ postId: roomId })
//   ];
// });

Meteor.methods({
  addBank(name) {
    // Make sure the user is logged in before inserting a bank
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    var bank = Banks.insert({
      name: name,
      createdAt: new Date(),
      userId: Meteor.userId(),
      username: Meteor.user().username,
      gameId: Games.currentGame()._id,
      mortgageRate: 1.59,
      profitAndLoss: []
      // customers: 1000
    });
  },
  setMortgageRate(mortgageRate, bankId){
    const bank = Banks.findOne(bankId);
    // Make sure only the task owner can make a task private
    if (bank.userId !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    Banks.update(bankId, { $set: { mortgageRate: mortgageRate } });
  }
});
