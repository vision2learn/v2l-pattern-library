# Version 1.0

def print_odds_between(first_number, last_number):
	''' Print all odd numbers between two integers,
	from lowest to highest.
	
	first_number = INT
	last_number = INT
	'''

	for number in range(first_number, last_number + 1):
	
		if(number % 2 != 0):
			print("{0}".format(number))
	
	return


print_odds_between(1, 10)

