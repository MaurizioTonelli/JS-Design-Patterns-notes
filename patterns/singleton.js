//MODULE 1: THE SINGLETON PATTERN
(function(){
    /*
    The singleton pattern restricts instantiation of a class to a single object.

    Classically, the singleton pattern can be implemented by creating a class with a method that creates a new instance of the
    class if one doesn't exist. In the event of an instance already existing, it simply returns a reference to that object.

    Singletons differ from static classes as we can delay their initialization, generally because they require some information
    that may not be available during intialization time.
     */

     //EXAMPLE 1

     var mySingleton = (function(){
         var instance;
         function init(){
             function privateMethod(){
                 console.log("I am private");
             }
             var privateVariable = "I am also private";
             var privateRandomNumber = Math.random();
             return{
                 publicMethod: function(){
                     console.log("The public can see me");
                 },
                 publicProperty: "I am also public",
                 getRandomNumber: function(){
                     return privateRandomNumber;
                 }
             };
         }
         return{
             getInstance: function(){
                 if(!instance){
                     instance = init();
                 }
                 return instance;
             }
         };
     })();

     //Bad singleton EXAMPLE
     myBadSingleton = (function(){
         var instance;
         function init(){
             var privateRandomNumber = Math.random();
             return{
                 getRandomNumber: function(){
                     return privateRandomNumber;
                 }
             };
         }
         return{
             getInstance: function(){
                 instance = init();
                 return instance; // this always creates a new singleton instance; BAD
             }
         }
     })();

     //Usage
     var singleA = mySingleton.getInstance();
     var singleB = mySingleton.getInstance();

     console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true

     var badSingleA = myBadSingleton.getInstance();
     var badSingleB = myBadSingleton.getInstance();
     console.log(badSingleA.getRandomNumber() === badSingleB.getRandomNumber()); //false

     //EXAMPLE OF SINGLETON USED IN THE CONTEXT OF COORDINATING OTHER OBJECTS

     var SingletonTester = (function(){
         function Singleton(options){
             options = options || {};
             this.name = "SingletonTester";
             this.pointX = options.pointX || 6;
             this.pointY = options.pointY || 10;
         }
         var instance;
         var _static = {
             name: "SingletonTester",
             getInstance: function(options){
                 if(instance === undefined){
                     instance = new Singleton(options);
                 }
                 return instance;
             }
         }
         return _static;
     })();

     var singletonTest = SingletonTester.getInstance({pointX: 5});
     console.log(singletonTest.pointX);

})();