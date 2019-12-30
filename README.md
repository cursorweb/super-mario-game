# Super mario game
Let's make this project better! Together!
You can view the post right [here](https://repl.it/talk/share/Epic-Mario-game/24988).  
Please remember that indent space is 2.  
When making a pull request, make sure to describe it as clearly as you can.  
Try to comment only when necessary and do not add new files unless a good reason is given.
The reason must be about higher levels of organization.
***
## Declaring variables
```javascript
var variable = 0;// This is good
var VARIABLE = 0;// This is bad
let variable = 0;// This is not recommended. We are trying to get browser support.
var camelCase = 0;// This is bad
var nocasing = 0;// This is good
```
## Declaring class
```javascript
class classname {
  constructor(...,...){
    ...
  }
}// This is not recommended.
function classname(...){
  ...
  this.draw = function(){
    ...
  }
}//This is the excact recommended format
```
## Setup
```javascript
// When declaring a class, here is the requirements
// @[name]
function [name](x, y, w, h, ...){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  ...
  this.draw = function(){
    ...
  }
  ...
}
```
