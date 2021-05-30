TODO:
- Fix huge decimal points / Create limit for number of digits
  - Setup a check on populateEquation for string.length
  - Round long decimal points
  - These two may need special interaction coded depending on length of the int before "."
- Make beautiful
  - Add stacked previous executions in hidden overflow divs?
BUG: Number, followed by an operation, followed by equals*2 results in NaN
    - likely something wrong with returnResults();
      - Indeed it does: I reset firstNumber and secondNumber to avoid unexpected recursion, but it causes this issue (line 575)

2021-05-30
- Added keyboard support
- Fixed bug: Unable to make a correction if the wrong button is pushed
- Fixed bug: Unable execute O! O^2 or root0 
  - There was an if statement looking for !firstNumber, which returned false with firstNumber = 0, preventing the functions from continuing)
- Resized default styling to fit on mobile
- Added placeholder Easter Eggs for dividing by 0 and squareroot negative numbers
- Removed the decimal if it's the last character in the string via parseFloat
- Core functionality established on all buttons
  - The problem with addition/concatination was much simpler than I expected it to be (parseFloat)
- Setup the Boolean newResult to properly concat new display strings after the execution of a function
NOTE: There were a lot of tribulations; I found that I have had to go back and forth through the code a number of times to fix mistakes or make alterations in order to get the behaviour that I wanted/expected. I can see how proper planning and a complete understanding of the order of operations will really make a difference as projects continue to get more complex.

2021-05-29
- Added function to returnResults and attached to equalsButton

2021-05-28
- First attempts at other functions
  - Found many sticking points and mapped out a plan
- Added functionality to clear and allclear buttons
- Added functionality to square, sqrt, factorial, and plusMinus
- Added conditionals to:
  - not populate 0 at the start of the string 
  - only populate one "."

2021-05-27
- Started adding button functionality
  - Numbers have been added, minus some conditions that need to be added
- Basic calculator structure (HTML and CSS) built with CSS Grid
- Math functions and master operator written
  - +, -, *, /, square, sqrt, exponent, and factorial
- Initial file setup