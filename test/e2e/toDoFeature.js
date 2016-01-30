describe('ToDo', function() {
  var taskEntryBox = element(by.css('#taskEntryBox'));
  var taskEntryButton = element(by.className("btn-success"));
  var taskEditLink = element(by.className("glyphicon-edit"));
  var taskEditTaskBox = element(by.model("toDoCtrl.editableTask"));
  var taskEditTaskComplete = element(by.className("glyphicon-ok"));
  var taskUncheckedBox = element(by.className("glyphicon-unchecked"));
  var taskCheckedBox = element(by.css('.glyphicon-check'));
  var activeFilter = element(by.linkText("Active"));
  var secondTaskUnchecked = element.all(by.repeater('task in toDoCtrl.tasks')).get(1).element(by.className('glyphicon-unchecked'));
  var completeFilter = element(by.linkText("Complete"));
  var allFilter = element(by.linkText("All"));

  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('To Do List');
  });

  // As a forgetful person
  // I want to store my tasks
  // So that I don't forget them
  describe('Adding tasks', function() {
    it('allows user to enter a task', function() {
      expect((taskEntryBox).isPresent()).toBe(true);
      expect((taskEntryButton).isPresent()).toBe(true);
    });

    it('displays a user\'s task', function() {
      taskEntryBox.sendKeys('First task');
      taskEntryButton.click();

      var tasks = element.all(by.repeater('task in toDoCtrl.tasks'));
      expect(tasks.get(0).getText()).toContain('First task');
    });
  });

  // As a person with limited time
  // I want to instantly be able to update my todo list (adding and changing
  // entries)
  // So that I have more time to think about other things
  describe('Editing tasks', function() {
    it('allows user to edit a task', function() {
      taskEditLink.click();
      taskEditTaskBox.sendKeys(' edited');
      taskEditTaskComplete.click();

      var tasks = element.all(by.repeater('task in toDoCtrl.tasks'));
      expect(tasks.get(0).getText()).toContain('First task edited');
    });
  });
  // As a person who actually gets stuff done
  // I want to mark my tasks as done
  // So that I don't do them twice
  describe('Completing tasks', function() {
    it('allows user to mark a task as \'done\'', function() {
      taskUncheckedBox.click();
      expect(taskCheckedBox.isPresent()).toBeTruthy();
    });

    it('allows user unmark a \'done\' task', function() {
      taskCheckedBox.click();
      expect(taskUncheckedBox.isPresent()).toBeTruthy();
    });
  });

  // As a person with a lot of tasks
  // I want to be able to filter my tasks by "All", "Active", "Complete"
  // So that I only see the relevant tasks
  describe('Filtering tasks', function() {
    it('allows user to filter tasks by \'Active\'', function() {
      taskEntryBox.sendKeys('Second task');
      taskEntryButton.click();
      secondTaskUnchecked.click();
      activeFilter.click();
      expect((taskCheckedBox).isPresent()).toBeFalsy;
      expect((taskUncheckedBox).isPresent()).toBeTruthy;
    });

    it('allows user to filter tasks by \'Complete\'', function() {
      completeFilter.click();
      expect((taskCheckedBox).isPresent()).toBeTruthy;
      expect((taskUncheckedBox).isPresent()).toBeFalsy;
    });

    it('allows user to filter tasks by \'All\'', function() {
      allFilter.click();
      expect((taskCheckedBox).isPresent()).toBeTruthy;
      expect((taskUncheckedBox).isPresent()).toBeTruthy;
    });
  });
});
