
//MODULE 1 : THE MODULE PATTERN

(function(){
    /* 
    There are several options for implementing modules, including:
     - The Module pattern
     - Object literal notation
     - AMD Modules
     - CommonJS Modules
     - ECMAScript Harmony modules

     With the module pattern, you can emulate private properties and methods
     using closure. This pattern uses an IIFE (Immediately Invoked Function Expression)
     , as we are using on this file
     as for to prevent naming collisions.
    */

   //EXAMPLE 1

    var testModule = (function(){
        var counter = 0;
        return {
            incrementCounter: function(){
                return counter++;
            },
            resetCounter: function(){
                console.log("counter value prior to reset: "  + counter);
                counter = 0;
            }
        }
    })();

    testModule.incrementCounter();
    testModule.resetCounter();


    //EXAMPLE 2

    var myNamespace = (function(){
        var myPrivateVar, myPrivateMethod;
        myPrivateVar = 0;
        myPrivateMethod = function(foo){
            console.log(foo);
        }
        return {
            myPublicVar: "foo",
            myPublicFunction: function(bar){
                myPrivateVar++;
                myPrivateMethod(bar);
            }
        }
    })();

    //EXAMPLE USING JQUERY AND UNDERSCORE ALIASES

    var myModule1 = (function(jQ, _){
        function privateMethod1(){
            jQ(".container").html("test");
        }

        function privateMethod2(){
            console.log(_.min([10,5,100,2,1000]));
        }
        return{
            publicMethod: function(){
                privateMethod1();
            }
        }

    })(jQuery, _);

    myModule1.publicMethod();

    //EXAMPLE : VARIATION USING GLOBAL IMPORTS

    var myModule2 = (function(){
        var module = {},
            privateVariable = "Hello";
        function privateMethod(){

        }
        module.publicProperty = "Foobar";
        module.publicMethod = function(){
            console.log(privateVariable);
        }
        return module;
    })();

})();



//MODULE 2: THE REVEALING MODULE PATTERN

(function(){
    /* This pattern defines all the functions and variables in the private scope, to then return an anonymous object with
    pointers to the private functionality wished to reveal as public*/

    //EXAMPLE 1
    myRevealingModule = (function(){

        var privateVar = "Ben Cherry";
        var publicVar = "Hey";

        function privateFunction(){
            console.log("Name: " + privateVar);
        }

        function publicSetName(strName){
            privateVar = strName;
        }

        function publicGetName(){
            privateFunction();
        }

        return{
            setName: publicSetName,
            greeting: publicVar,
            getName: publicGetName
        }
    })();

    myRevealingModule.setName("Paul");

    //EXAMPLE 2
    var myRevealingModule2 = (function(){

        var privateCounter = 0;

        function privateFunction(){
            privateCounter++;
        }

        function publicFunction(){
            publicIncrement();
        }

        function publicIncrement(){
            privateFunction();
        }

        function publicGetCount(){
            return privateCounter;
        }

        return{
            start: publicFunction,
            increment: publicIncrement,
            count: publicGetCount
        }
    })();

    myRevealingModule.start();
    
})();