# Here is our function:
def print_lowest_and_sort(input_list):
	print(min(a_list_of_numbers))
	output_list = sorted(input_list)
	return(output_list)


# Here is an unsorted list variable containing Ints:
a_list_of_numbers = [7, 5, 3, 10] # 

# Now we can call our function, which prints, the lowest and
# returns a sorted list
sorted_list = print_lowest_and_sort(a_list_of_numbers)
print(sorted_list)


