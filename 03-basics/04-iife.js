// IIFE      Immediately Invoked Function Expression 

(function chai (){
    //named IIFE
    console.log (`DB CONNECTED`)
})();

( (name)=>{
    // Unnamed IIFE
    console.log(`DB TWO CONNECTED ${name}`);
})("Samadhan");