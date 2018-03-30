
###################################################################################
# Code from  Stack Overflow to change colour in IDLE SHELL                        
#import sys
#
#try: color = sys.stdout.shell
#except AttributeError: raise RuntimeError("Use IDLE")

##color.write("Hi, are you called Miharu461? \n","KEYWORD")
##color.write("Yes","STRING")
##color.write(" or ","KEYWORD")
##color.write("No\n","COMMENT")
####################################################################################

import numpy

problem = '''
Marcia has just opened her new computer store. She makes $27 on every computer
she sells her monthly expenses are $10,000. What is the minimum number of computers
she needs to sell in a month to make a profit?

Solution
The minimum profit is breaking even (total income = expenses)
Equation is 27x = 10000
          '''
print problem

# Initialize variables
guess1 = 0

# Guess and Check Method until condition met
while True:
    if 27*guess1 >= 10000:
        break
    guess1 += 1
    
# Print the Result
print "Guess and check or Brute force method or Exhaustive numeration"
print "Answer to the nearest computer is: ", guess1, " and Total guesses were: ", guess1 + 1, " \n"

# Intialize variables
# Aproximation Method
expenses1 = 10000
epsilon1 = 1
guess2 = 0
increment = 1
numGuesses = 0

while expenses1 - (27*guess2) >= epsilon1 and (27*guess2) < 10000:
    guess2 += increment
    numGuesses += 1
    
# Print the Result
if expenses1 - (27*guess2) <= epsilon1:
    print "Approximation Method"
    print "Solution is",round(guess2)," computers and Total guesses:",numGuesses, " \n"


# Initialize variables
# Bisection Search Method
expenses = 10000
epsilon = 1
guessNum = 0
low = 0
high = expenses
guess = (high + low)/2.0

# Sytematic approach for finding guess
while abs(expenses - (27*guess)) >= epsilon and guess < expenses:
    # Elimination of search space based on condition
    if 27*guess > expenses:
        high = guess
    else:
        low = guess
    # Rebinding of high and low to new search space    
    guess = (high + low)/2.0        
    guessNum += 1
    
#Guess to the nearest computer
guess = guess + 1 
print "Bisection search Mehod"    
print "Guess is: ", round(guess), " and Number of guesses is: ", guessNum, " \n"

# Initialize variables
expenses3 = 10000.0
cost_of_each_computer = 27.0

# Print Result According to Soulution Equation
print "Direct Solution Method (Using python as a calculator)"
if ((expenses3/cost_of_each_computer) - (numpy.round((10000.0/27.0)))) > 0:
    print (numpy.round((10000.0/27.0))) + 1," computers"
    



        
