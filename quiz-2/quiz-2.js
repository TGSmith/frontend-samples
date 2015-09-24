// #2 Create the lines of code needed below so that this script outputs the following text to the browser's console (i.e. using console.log()):

function User(name) {
    this.name = name;
    this.sayName = function(){ 
        console.log("Hello, my name is " + this.name);
    }
}

var user1 = new User("Harry");
user1.sayName();

var user2 = new User("Ron");
user2.sayName();

var user3 = new User("Hermione");
user3.sayName();
