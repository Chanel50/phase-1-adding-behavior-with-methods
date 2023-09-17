class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  // Creating instances and calling the speak method
  const cat = new Cat("Whiskers", "female");
  console.log(cat.speak()); // Output: "Whiskers says meow!"
  
  const dog = new Dog("Fido", "male");
  console.log(dog.speak()); // Output: "Fido says woof!"
  
  const bird = new Bird("Polly", "male");
  console.log(bird.speak()); // Output: "It's me! Polly, the parrot!"
  
  const femaleBird = new Bird("Mia", "female");
  console.log(femaleBird.speak()); // Output: "Mia says squawk!"
  