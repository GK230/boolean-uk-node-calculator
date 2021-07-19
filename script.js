var myArgs = process.argv.slice(2);

let i = 0;
let subtotal = 0;
for (i = 0; i < myArgs.length; i++) {
  if (myArgs[i] !== /([0-9]|[*/+-])/) {
    console.log("Please enter a number or operator");
  } else if (myArgs[i] === /[0-9]/) {
    parseInt(myArgs[i]);
  }

  if (myArgs[i] === "*") {
    subtotal += myArgs[i - 1] * myArgs[i + 1];
  } else if (myArgs[i] == "/") {
    subtotal += myArgs[i - 1] / myArgs[i + 1];
  }
  if (myArgs[i] === "+") {
    subtotal += myArgs[i - 1] + myArgs[i + 1];
  } else if (myArgs[i] === "-") {
    subtotal += myArgs[i - 1] - myArgs[i + 1];
  }
}

// const a = parseInt(myArgs[0]);
// const b = parseInt(myArgs[2]);

// if (typeof a !== "number" || typeof b !== "number") {
//   console.log("Please enter a number");
// }
// if (
//   myArgs[1] !== "add" &&
//   myArgs[1] !== "minus" &&
//   myArgs[1] !== "times" &&
//   myArgs[1] !== "divided"
// ) {
//   console.log("Please enter a valid operator");
// }

// if (myArgs[1] === "add") {
//   console.log(a + b);
// }

// if (myArgs[1] === "minus") {
//   console.log(a - b);
// }

// if (myArgs[1] === "times") {
//   console.log(a * b);
// }

// if (myArgs[1] === "divided") {
//   console.log(a / b);
// }
