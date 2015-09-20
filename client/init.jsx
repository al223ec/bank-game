Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

// Meteor.subscribe("tasks");
Meteor.subscribe("banks");
Meteor.subscribe("games");

Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  React.render(<App />, document.getElementById("render-target"));
});
