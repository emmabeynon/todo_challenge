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
      expect(ctrl.tasks).toContain({task: 'My first task', completed: false});
    });
  });

  describe('#editTask', function() {
    it('edits a task', function() {
      ctrl.newTask = 'My first task'
      ctrl.addTask();
      ctrl.task = 'My first task';
      ctrl.editableTask = 'My edited task';
      ctrl.editTask();
      expect(ctrl.tasks[0].task).toEqual('My edited task');
    });
  });
});
