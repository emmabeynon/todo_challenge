toDoList.controller('ToDoListController', function() {
  var self = this;
  self.newTask = null;
  self.tasks = [];
  self.task = null;
  self.editorEnabled = false;

  self.addTask = function() {
    self.tasks.push(self.newTask);
    self.newTask = null;
  };

  self.enableEditor = function(task) {
    self.editorEnabled = true;
    self.editableTask = task;
    self.index = self.tasks.indexOf(task);
  };

  self.disableEditor = function() {
    self.editorEnabled = false;
  };

  self.editTask = function() {
    self.task = self.editableTask
    self.tasks.splice(self.index)
    self.tasks.splice(self.index, 0, self.task)
    self.disableEditor();
  };
});
