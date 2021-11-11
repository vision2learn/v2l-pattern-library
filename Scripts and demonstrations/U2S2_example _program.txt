// Declare some variables
var variable_1 = 25
var variable_2 = 28
var list_1 = [5, 2, 6, 3, 7, 2]

// Control flow: Conditional.
if (variable_1 === variable_2) {
  console.log('The variables are equal.');
} else {
  console.log('The variables are not equal.');
}


// Control flow: Loop (iteration)
for (let i = 0; i < list_1.length; i++) {
	console.log('List item ', i, ' = ', list_1[i])
}


// Function
function myFunction (input_1, input_2) {
  sum_of_inputs = input_1 + input_2
  console.log('The sum of inputs = ', sum_of_inputs);
}

// Control flow: Function call
myFunction(variable_1, variable_2);


