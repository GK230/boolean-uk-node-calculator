var myArgs = process.argv.slice(2);

const a = parseInt(myArgs[0]);
const b = parseInt(myArgs[2]);

if (isInteger(a) === false || isInteger(b) === false) {
  console.log("Please enter a number");
} else if (
  myArgs[1] !== "add" ||
  myArgs[1] !== "minus" ||
  myArgs[1] !== "times" ||
  myArgs[1] !== "divided"
) {
  console.log("Please enter a valid operator");
}

if (myArgs[1] === "add") {
  console.log(a + b);
}

if (myArgs[1] === "minus") {
  console.log(a - b);
}

if (myArgs[1] === "times") {
  console.log(a * b);
}

if (myArgs[1] === "divided") {
  console.log(a / b);
}
