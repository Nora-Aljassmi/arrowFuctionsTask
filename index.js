// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}

}

********************************/

const greet = () => "Nora";
{
  console.log(greet());
}

// Q2) Write a simple arrow function that takes two parameters and returns their sum.

const sum = (x, z) => {
  return x + z;
};
console.log(sum(2, 4));

// Q3) Write a simple arrow function that squares a number.

const num = (y) => {
  return y * y;
};
console.log(num(3));

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
