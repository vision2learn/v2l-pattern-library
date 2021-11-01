input_variable_1 = 1

while input_variable_1 != 10:
	print('Input value = ', input_variable_1)

	if input_variable_1 * 2 > 15:
		print('Condition met at', input_variable_1)
		break

	input_variable_1 += 1
	print('Condition not met, continuing While loop...')

