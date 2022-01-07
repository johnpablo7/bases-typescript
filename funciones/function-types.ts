(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => `El mundo está salvado!`;

  // myFunction = 10;
  // console.log(myFunction);

  let myFunction: (x: number, y: number) => number;

  myFunction = addNumbers;
  console.log(myFunction(1, 2));

  // let myFunction: (y: string) => string;
  // myFunction = greet;
  // console.log(myFunction("Fernando"));

  // let myFunction: () => string;
  // myFunction = saveTheWorld;
  // console.log(myFunction());
})();
