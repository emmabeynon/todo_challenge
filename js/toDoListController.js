toDoList.controller('ToDoListController', function() {
  var self = this;
  self.tasks = [];
  self.newTask = null;
  console.log(self.newTask);
  self.addTask = function() {
    self.tasks.push(self.newTask);
  };
});
