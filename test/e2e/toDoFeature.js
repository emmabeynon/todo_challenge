describe('ToDo', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('To Do List');
  });

  // As a forgetful person
  // I want to store my tasks
  // So that I don't forget them
  describe('Task entry', function() {
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
});
