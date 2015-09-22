
// Task component - represents a single todo item
Game = React.createClass({
  propTypes: {
    game: React.PropTypes.object.isRequired
  },

  mixins: [ReactMeteorData],
  getMeteorData() {
    let query = {};

    return {
      bank: Banks.findOne({owner: Meteor.userId(), game: this.props.game._id }),
      currentUser: Meteor.user()
    }
  },

  // toggleChecked() {
  //   // Set the checked property to the opposite of its current value
  //   Meteor.call("setChecked", this.props.task._id, ! this.props.task.checked);
  // },
  //
  // togglePrivate() {
  //   Meteor.call("setPrivate", this.props.task._id, ! this.props.task.private);
  // },
  //
  // deleteThisTask() {
  //   Meteor.call("removeTask", this.props.task._id);
  // },

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var text = React.findDOMNode(this.refs.textInput).value.trim();
    Meteor.call("addBank", text);
    // Clear form

    React.findDOMNode(this.refs.textInput).value = "";
  },

  renderBank() {
     return (<Bank
       bank={ this.data.bank } />)
  },

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    // Add "checked" and/or "private" to the className when needed
      // const taskClassName = (this.props.task.checked ? "checked" : "") + " " +
      //   (this.props.task.private ? "private" : "");

    return (
      <li>
        <span className="text">
          Game._id: <strong> { this.props.game._id }</strong>
          </span>

          <ul>
            <li> Bank:: </li>
            { this.renderBank() }
          </ul>

        { this.data.bank ? '' :
          <form className="new-task" onSubmit={this.handleSubmit} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add a bank" />
            </form>
        }

      </li>
      );
    }
  });
