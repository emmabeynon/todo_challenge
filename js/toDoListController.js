toDoList.controller('ToDoListController', function() {
  var self = this;
  self.newTask = null;
  self.tasks = [];
  self.task = null;
  self.editorEnabled = false;
  self.filters = {};

  self.addTask = function() {
    self.tasks.push({task: self.newTask, completed: false});
    self.newTask = null;
  };

  self.enableEditor = function(task) {
    self.editorEnabled = true;
    self.editableTask = task;
    self.task = task;
  };

  self.disableEditor = function() {
    self.editorEnabled = false;
  };

  self.editTask = function() {
    for(var i = 0; i < self.tasks.length; i++) {
      if (self.tasks[i].task === self.task) {
        self.tasks[i].task = self.editableTask;
      }
    }
    self.disableEditor();
  };

  self.deleteTask = function(task) {
    for(var i = 0; i < self.tasks.length; i++) {
      if (self.tasks[i].task === task) {
        self.tasks.splice(i,1);
      }
    }
  };
});
