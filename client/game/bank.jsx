
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
    setInterestRate(){  

    },


  render() {
    return (
      <li>
        <span className="text">
          <strong>{this.props.bank.username}</strong>: {this.props.bank.name}
          </span>
        </li>
      );
    }
  });
