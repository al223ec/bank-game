
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
      Meteor.call("setMortgageRate", this.props.bank._id);
    },


  render() {
    return (
      <article className="bank">
          <h4>{ this.props.bank.name }</h4>
          <table>
            <thead>
              <tr><td>Ränta</td><td>More</td><td>Info</td></tr>
            </thead>
            <tbody>
              <tr><td></td><td></td><td></td></tr>
            </tbody>
          </table>
          <ul>
            <li>Kunder</li>
          </ul>
        </article>
      );
    }
  });
