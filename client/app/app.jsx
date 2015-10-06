// App component - represents the whole app
App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let query = {};

    return {
      games: Games.find({ players: {$elemMatch: { userId: Meteor.userId() } }, ongoing:true } ).fetch(),
      currentUser: Meteor.user()
    };
  },
  renderGames(){
    return this.data.games.map((game) =>{
      return <Game
        key={game._id}
        game={game} />;
    });
  },
  render() {
    return (
      <div className="container">
        <header>
          <h1>Bank game </h1>
          <LoginUIWrapper />
        </header>
        <Navigation />
        <section>
        { this.data.currentUser ?
          this.renderGames()
          : <p> 'Please log in to be able to play the game' </p>
        }
        </section>
      </div>
    );
  }
});
