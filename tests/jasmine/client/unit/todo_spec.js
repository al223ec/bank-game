describe("Todo Component", function() {
  var renderWithProps, component, el, $el;

  beforeEach(function() {

    renderWithProps = function(props) {
      component = renderComponent(Todo, props);
      el = React.findDOMNode(component);
      $el = $(el);
    };
  });

  it("should contain Todo List", function() {
    renderWithProps({});
    expect($el.text()).toContain('Todo List');
  });

  it("should have default hideCompleted:false prop", function() {
    renderWithProps({});
    expect(component.state.hideCompleted).toBe(false);
  });

  it("should toggle hideCompleted state", function() {
    renderWithProps({});
    component.toggleHideCompleted();
    expect(component.state.hideCompleted).toBe(true);
  });

  it("click .hide-completed.input should change state.hideCompleted", function(){
    renderWithProps({});
    var hide = component.state.hideCompleted;
    simulateClickOn($el.find('.hide-completed').find('input'));
    expect(component.state.hideCompleted).toBe(!hide);
  });


  describe("rendering Tasks", function(){
    var mockTasks, testText;

    beforeEach(function(){
      testText = "some text to be displayed";
      
      mockTasks = [{
        text: testText,
        date: new Date
      }];

      spyOn(Tasks, 'find').and.returnValue({
        count: function(){
          return 4;
        },
        fetch: function(){
          return mockTasks;
        }
      });
    });

    it("should render incompleteCount", function(){
      renderWithProps({});
      expect($el.find('h1').text()).toContain('(4)');
    });

    it("should render text", function(){
      renderWithProps({});
      expect($el.find('ul').text()).toContain(testText);
    });
  });
});
