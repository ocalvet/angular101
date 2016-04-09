angular
  .module('angular101', [])
  .controller('AppCtrl', function() {
    var app = this;
    app.title = "Hello There!";
    app.sayHello = function() {
      alert("Hi " + app.value);
    }
  });
