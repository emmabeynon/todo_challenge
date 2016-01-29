describe('ToDoListController', function(){
  beforeEach(module('ToDoList'));
  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('ToDoListController');
  }));

  it('initializes with an empty array of tasks', function() {
    expect(ctrl.tasks).toEqual([]);
  });

  describe('#addTask', function() {
    it('adds a task to the tasks array', function() {
      ctrl.newTask = 'My first task'
      ctrl.addTask();
      expect(ctrl.tasks).toContain('My first task');
    });
  });
});
