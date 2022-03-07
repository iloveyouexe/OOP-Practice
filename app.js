// let p1 = {
//   name: "Hunter",
//   sayHello: function () {
//     alert(`Hi! I am ${this.name}.`);
//   },
// };

// let p2 = {
//   name: "Christoph",
//   sayHello: function () {
//     alert(`Hi, I am ${this.name}.`);
//   },
// };

// p1.sayHello();
// p2.sayHello();

// This is the Pseudo-Class method.
//  constructor
function Person(name, age) {
  //  set properties using
  //  this.propName syntax
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  // this is storing a function with the name
  // "sayHello" to the "Person" function above.
  // function Person, name and age, function sayHello.
  alert("Hello my name is " + this.name + "! I am " + this.age + " years old.");
};

// let p1 = new Person("Hunter", 25);
// p1.sayHello();

Person.prototype.sleep = function () {
  alert(
    "Hello my name is " +
      this.name +
      "! I am going to go to sleep now, goodbye."
  );
};
// Creating Object Instances

let p1 = new Person("Jane", 29);
let p2 = new Person("John", 28);
p1.sayHello();
p2.sayHello();

p1.sleep();
p2.sleep();
