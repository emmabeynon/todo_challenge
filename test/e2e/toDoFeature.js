describe('ToDo', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('To Do List');
  });

  // As a forgetful person
  // I want to store my tasks
  // So that I don't forget them
  describe('Adding tasks', function() {
    var taskEntryBox = element(by.css('#taskEntryBox'));
    var taskEntryButton = element(by.className("btn-success"));

    it('allows user to enter a task', function() {
      expect((taskEntryBox).isPresent()).toBe(true);
      expect((taskEntryButton).isPresent()).toBe(true);
    });

    it('displays a user\'s task', function() {
      taskEntryBox.sendKeys('First task');
      taskEntryButton.click();

      var tasks = element.all(by.repeater(''));
      expect(tasks.get(0).getText()).toContain('First task');
    });
  });

  // As a person with limited time
  // I want to instantly be able to update my todo list (adding and changing
  // entries)
  // So that I have more time to think about other things
  describe('Editing tasks', function() {
    var taskEditLink = element(by.className("glyphicon-edit"));
    var taskEditTaskBox = element(by.model("toDoCtrl.editableTask"));
    var taskEditTaskComplete = element(by.className("glyphicon-ok"));

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
    var taskUncheckedBox = element(by.className("glyphicon-unchecked"));
    var taskCheckedBox = element(by.css('.glyphicon-check'));

    it('allows user to mark a task as \'done\'', function() {
      taskUncheckedBox.click();
      expect(taskCheckedBox.isPresent()).toBeTruthy();
    });

    it('allows user unmark a \'done\' task', function() {
      taskCheckedBox.click();
      expect(taskUncheckedBox.isPresent()).toBeTruthy();
    });
  });
});
