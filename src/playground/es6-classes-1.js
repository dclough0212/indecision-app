console.log("App.js is running!");

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  
  getGreeting() {
    return `Hello ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name,age,major) {
    super(name,age);
    this.major = major;
  }

  hasMajor(){
    return !!this.major;
  }
  getDescription() {
    return `${this.name} is majoring in ${this.major}`;
  }
}

class Traveler extends Person {
  constructor(name,age,homelocation){
    super(name, age);
    this.homelocation = homelocation;
  }

  getDescription() {
    let desc = super.getDescription();// 
    !!this.homelocation ? desc += ` He is from ${this.homelocation}` : desc += " He is from nowhere's ville man.";
     
    return desc;
  }
}


const me = new Traveler("David Clough", 52);

console.log(me.getDescription());
