var myArgs = process.argv.slice(2);

const a = parseInt(myArgs[0]);
const b = parseInt(myArgs[1]);

if (myArgs[2] === "+") {
  console.log(a + b);
}

if (myArgs[2] === "-") {
  console.log(a - b);
}

if (myArgs[2] === "x") {
  console.log(a * b);
}

if (myArgs[2] === "/") {
  console.log(a / b);
}
