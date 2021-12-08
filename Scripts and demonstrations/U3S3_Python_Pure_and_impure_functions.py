# Define a pure function
def pure_function(input_a, input_b):

	# Define a local variable (cannot be changed outside of function)
	loc_x = 3

	output = ((input_a/input_b) + loc_x)
	print('Pure output =', output)
	return 

# Call the pure function
pure_function(8, 2)

# Define an impure function
def impure_function(input_a, input_b):
	
	# The global variable defined below is called here
	global glob_x

	output = ((input_a/input_b) + glob_x)
	print('Impure output =', output)
	return 

# Define a global variable then set it value
global glob_x
glob_x = 3

# Call the impure function
impure_function(8, 2)

# Change the value of the global variable again
glob_x = 6

# Then call the impure function again with exactly the same inputs
impure_function(8, 2)

