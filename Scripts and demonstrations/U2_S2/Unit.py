""" Python code to show examples of a unit """

# Here we define a function to multiply two 
# input values then return the answer.
def multiply_values(a, b):
	c = a * b
	return(c)

# Now we test the function. First with integers:
test_1 = multiply_values(2, 4)

# ... Then with an integer and a string:
test_2 = multiply_values(2, 'goat')

# Now, we check each variable by printing it:
print('test_1 is: ', test_1)
print('test_2 is: ', test_2)

# Finally, we test check whether the output is an 
# integer
print('Are the outputs integers?') 
print('test_1: ', isinstance(test_1, int))
print('test_2: ', isinstance(test_2, int))
