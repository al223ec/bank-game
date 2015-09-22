// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    let query = {};

    return {
      games: Games.find({ players: {$elemMatch: { userId: Meteor.userId() } }, ongoing:true } ).fetch(),
      incompleteCount: Banks.find(query).count(),
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
          <h1>Bank game ({this.data.incompleteCount})</h1>

          <LoginUIWrapper />


          { this.data.currentUser ?
            <form className="new-task" onSubmit={this.handleSubmit} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add new tasks" />
            </form> : ''
          }
        </header>
        { this.data.currentUser ? "show bankgame" : 'Please log in to be able to play the game' }

        <ul>
          { this.renderGames() }
        </ul>
      </div>
    );
  }
});
