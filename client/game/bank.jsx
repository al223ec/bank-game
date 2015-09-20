
// Task component - represents a single todo item
Bank = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    bank: React.PropTypes.object.isRequired,
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



  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    // Add "checked" and/or "private" to the className when needed
      // const taskClassName = (this.props.task.checked ? "checked" : "") + " " +
      //   (this.props.task.private ? "private" : "");

    return (
      <li>
        <span className="text">
          <strong>{this.props.bank.username}</strong>: {this.props.bank.name}
          </span>
        </li>
      );
    }
  });
