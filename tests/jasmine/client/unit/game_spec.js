describe("Game Component", function() {
  var renderWithProps, component, el, $el;

  beforeEach(function() {
    //  spyOn(Meteor, 'userId').and.returnValue("W4wpoepo123");

    renderWithProps = function(props) {
      props = props ? props : { game: { _id: "GameId1234"}};
      component = renderComponent(Game, props);
      el = React.findDOMNode(component);
      $el = $(el);
    };
  });


  describe("rendering bank", function(){
    var mockBank;

    beforeEach(function(){
      mockBank = {
        userId: "W4wpoepo123"
      };

      spyOn(Banks, 'findOne').and.returnValue(mockBank);
    });

    it("should render incompleteCount", function(){
      renderWithProps();
    });

    it("should render text", function(){
      renderWithProps();
    });
  });
});
