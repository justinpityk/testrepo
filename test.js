var abc = "abc";

/*
this is a block comment
*/
var myFunc = function (param) {
    var self = this,
        temp,
        i;

    temp = abc;

    self.firstName = "John";

    for (i = 0; i < 10; i++) {
        console.log(i);
    }

    return {
        myProp: temp,
        myPublicFunc: function() {
            var hello = "world";
            return hello === "world" ? hello : "hi";
        }
    }
};

class NameClass {
}

//call myFunc
var something = myFunc("hi");
something.myProp = "hi";
something.myPublicFunc();

function someFunc() {
  var myVar = "hello";
  if (myVar === "hello")
  {
      myVar = "hello world!!!!!";
  }
  return myVar;
};

someFunc();

var aNewVar = someFunc();
var someStuff = { id: 12345 };
var someMoreStuff = "hello world";

something.myProp = "can I change this?";

var anotherFunc = function (param) {
    var self = this;

    self._firstName = "Bob";

    return {
        firstName: self._firstName
    }
};