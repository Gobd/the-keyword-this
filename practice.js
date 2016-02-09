//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //this will refer to the object that called it, so functions can be re-used easier

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //implicit binding where it is based on the context of function invocation, explicit binding: 'call, apply, bind' where we specify what the value should be bound to, new binding where , and default binding where this is bound to windows object because it wasn't called by an object

  // 3) What is the difference between call and apply?

      //call takes its arguments comma seperated, and apple takes them in an array

  // 4) What does .bind do?

      //it is mostly the same as call, but the function is not invoked, so can be used to curry functions


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: "uname",
  email: "stuff@stuff.com",
  getUsername: function(){
    return this.username;
  }
};

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


user.getUsername();


// Write the function definitions which will make the following function invocations function properly.

function Car (brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.moveCar = function(){
    return this.year + 10;
  };
}

// Car.prototype.moveCar = function(){
//   return this.year + 10;
// };

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)

getYear.apply(prius);
getYear.apply(mustang);


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)

//undefined or some error

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //the setTimeout function

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
setTimeout(getMyUsername.apply(myUser), 5000);
