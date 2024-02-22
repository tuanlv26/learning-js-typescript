class Person{
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    greet(){
        return this.name + " says hello! I'm " + this.age + " years old."; 
    }
}

let person1 = new Person("Le Tuan", 26, "Hai Duong");
console.log(person1.greet());
