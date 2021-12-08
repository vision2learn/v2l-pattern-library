# Define a recursive function
def sum_of_list_below(input_list, threshold_value):

    list_sum = sum(input_list)

    # Base state 1: more than 2 values in list
    if len(input_list) < 3:
        print('Threshold not reached')
        return

    # Base state 2: list sum is below threshold
    if list_sum > threshold_value:
            
            input_list = input_list[2:len(input_list)]
        
            # Here is the recursive function call
            sum_of_list_below(input_list, threshold_value)
    else:
           print('Reached threshold at list length', len(input_list))
           print('List: ', input_list)
           print('List sum: ', list_sum)



# Define a list of numbers
list_1 = [1, 5, 6, 5, 7, 3, 7, 3, 2]

# Define a threshold
threshold = 20

# Call the recursive function
sum_of_list_below(list_1, threshold)

