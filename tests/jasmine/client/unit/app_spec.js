describe("App Component", function() {
  var renderWithProps, component, el, $el;

  beforeEach(function() {
    renderWithProps = function(props) {
      component = renderComponent(App, props);
      el = React.findDOMNode(component);
      $el = $(el);
    };
  });

  it("should have h1 Bank game", function() {
    renderWithProps({});
    expect($el.find('h1').text()).toContain('Bank game');
  });

  it("should prompt player to log in", function(){
    expect($el.find('section').text().toContain('Please log in to be able to play the game');
  });

  describe("when logged in", function(){
    beforeEach(function(){
      spyOn(App, 'getMeteorData').and.returnValue({
        currentUser: true,
        games: []
      });
    });

    it("should have list with games", function() {
      renderWithProps({});
      expect($el.find('ul').text()).toContain('');
    });
  });

  describe("rendering Games", function(){
    var mockGames;

    beforeEach(function(){
      mockGames = [{
        gameTime: 180,
        gameLength: 31536000, //Ett år i sek
        name: "Game1",
        players: [{
          userId: "Wweere1232134"
        }]
      }];

      // spyOn(Games, 'find').and.returnValue({
      //   fetch: function(){
      //     return mockGames;
      //   }
      // });
    });

    it("should render game", function(){
      renderWithProps({});
      // expect($el.find('ul').text()).toContain();
    });
  });
});
