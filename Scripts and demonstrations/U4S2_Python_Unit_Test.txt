""" Python code to show examples of a unit """

# Here we define a function to multiply two input values then return the answer.
def multiply_values(a, b):
	c = a * b
	return(c)

# Now we test the function. First with integers:
test_1 = multiply_values(2, 4)

# Now with an integer and a string:
test_2 = multiply_values(2, 'goat')

# Here, we check
print('Are the outputs integers?') 
print('Test 1: ', isinstance(test_1, int))

print('Test 2: ', isinstance(test_2, int))
