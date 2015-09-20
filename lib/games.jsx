Games = new Mongo.Collection("games");

Games.currentGame = function(){
  return Games.findOne({ players: {$elemMatch: {userId: Meteor.userId() } }, ongoing:true } );
}

if (Meteor.isServer) {
  Meteor.publish("games", function () {
    return Games.find();
  });
}

Meteor.methods({
  isGameActive(gameId) {
    const game = Games.findOne(gameId);
    // if (game.private && task.owner !== Meteor.userId()) {
    //   // If the task is private, make sure only the owner can delete it
    //   throw new Meteor.Error("not-authorized");
    // }

    return game.active
  },
  getGameByUserId(userId){},
  getBanks(){
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    //return Banks.find({ game: Games.currentGame()._id });
  },
  getCurrentGame(){},
  pauseGame(){},
  addPlayer(userId){},
});
