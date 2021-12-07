""" Python code with exception handling """

# Here we define a function to add two input values then print the answer.
def add_values_and_print(a, b):

	try:				# This is where we try the operation
		c = a + b
	except TypeError:	# This is where we state what to do (the exception) in case of a TypeError
		print('TypeError. Please ensure that both input variables are Ints.')
		return
	else:
		print('The output is equal to: ', c)

		return(c)

# Now we test the function. First with integers:
test_1 = add_values_and_print(2, 4)

# Now with an integer and a string:
test_2 = add_values_and_print(2, 'goat')



