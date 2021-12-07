# PYTHON

# A subroutine performs a specific task
def python_subroutine(argument_1, arugment_2):
	output_value = argument_1 * argument_1
	print(output_value)

# A function performs a specific and gives a return value
def python_function(argument_1, arugment_2):
	return_value = argument_1 * argument_1
	print(return_value)
	return(return_value)


class PythonClass:
    """A simple example class"""
    global python_property
    python_property = 12345

    def python_method(self):
    	print('hello world')


python_variable = python_function(2,5)
python_subroutine(2,5)

PythonClassInstance = PythonClass()
print(python_property)
PythonClassInstance.python_method()

# print(python_variable + python_variable)
