"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;
    // myFunction = 10;
    // console.log(myFunction);
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    // let myFunction: (y: string) => string;
    // myFunction = greet;
    // console.log(myFunction("Fernando"));
    // let myFunction: () => string;
    // myFunction = saveTheWorld;
    // console.log(myFunction());
})();
