//MODULE 1: BASIC CONSTRUCTORS EXAMPLE
(function(){
        // WE CAN SET AN OBJECT'S PROPERTIES WITH THE DEFINEPROPERTY METHOD
        var obj = {}; // OBJECT LITERAL

        var defineProp = function(obj, key, value){
            var config = {
                value: value,
                writable: true,
                enumerable: true,
                configurable: true,
            }
            Object.defineProperty(obj, key, config);
        }

        var person = Object.create(Object.prototype);

        defineProp(person, "car", "Bocho");
        defineProp(person, "dateOfBirth", "1982");
        defineProp(person, "hasBeard", true);

        console.log(person);

        //WE CAN ALSO USE THE DEFINEPROPERTIES METHOD

        var newObject = {};

        Object.defineProperties(newObject, {
            "someKey":{
                value: "Hello",
                writable: true,
            },

            "anotherKey": {
                value: "foo",
                writable: false,
            }
        })
        console.log(newObject);
})();



//MODULE 2 : CONSTRUCTORS WITH PROTOTYPES
//instead of writing the methods inside the constructor, making all instances define the function, 
//we can use prototypes, so that every instance shares them.

(function(){
    function Car(model, year, miles){
        this.model = model;
        this.year = year;
        this.miles = miles;
    }
    Car.prototype.toString = function(){
        return this.model + "has " + this.miles + " miles";
    }

    var civic = new Car("Honda Civic", 2009, 20000);
    var mondeo = new Car("Ford Mondeo", 2010, 5000);

    //now a single instance of toString() will be shared among objects
})();


