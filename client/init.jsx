Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Meteor.subscribe("tasks");

Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  React.render(<Todo />, document.getElementById("render-target"));
});
