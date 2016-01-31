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

  describe('#deleteTask', function() {
    it('deletes a task', function() {
      ctrl.newTask = 'My first task'
      ctrl.addTask();
      ctrl.newTask = 'My second task'
      ctrl.addTask();
      ctrl.deleteTask('My first task');
      expect(ctrl.tasks[0].task).not.toBe('My first task');
    });
  });

  describe('#enableEditor', function() {
    it('allows view to use inline task editing', function() {
      var task = "Task";
      ctrl.enableEditor(task);
      expect(ctrl.editorEnabled).toBeTruthy();
      expect(ctrl.editableTask).toEqual(task);
      expect(ctrl.task).toEqual(task);
    });
  });

  describe('#disableEditor', function() {
    it('prevents view from using inline task editing', function() {
      ctrl.disableEditor();
      expect(ctrl.editorEnabled).toBeFalsy();
    });
  });
});
