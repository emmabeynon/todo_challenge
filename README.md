To Do Challenge
================

Author: Emma Beynon

Github: https://github.com/emmabeynon

Email: emma.beynon@gmail.com

This is my submission for the Makers Academy Week 8 Weekend Challenge: https://github.com/emmabeynon/todo_challenge


Brief
---------

Build a Todo list as a mini front-end application. You don't have to use a database, the front-end is more important - you can use an appropriate data structure stored somewhere in your JavaScript (this time only!)

Here are the core user stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

Here are some other user stories you may choose to implement:

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

## Extensions

* Deploy the app
* Create a persistance layer (e.g. MongoDB), or use LocalStorage or the filesystem through Node
* Make it look purdy (CSS) - try a framework like Bootstrap or Foundation

Instructions
------------
1. Fork repo and clone to your local machine.
2. Change directories to the repo directory.
3. Run `$ bower install`
4. Run `$ npm install`
5. Run `$ http-server`
6. Navigate to http://localhost:8080/
7. Enter your tasks!

Approach
---------
This app was built using AngularJS, HTML and Bootstrap.  Development was test driven using Karma and Jasmine for the unit tests and Protractor for the feature tests.

Further Work
-------------
* Style tasks so that edit and delete icons are aligned
* Remove a href underline
* Bug - multiple input boxes appear when editing
* Deploy the app
* Create a persistence layer (e.g. MongoDB), or use LocalStorage or the filesystem through Node
