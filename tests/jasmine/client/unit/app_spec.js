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
