var myRevealingModule2 = (function(){

    function greet(text){
        console.log(text);
    }

    return{
        salute: greet,
    };
})();

myRevealingModule2.salute("perro");