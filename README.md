TODO:
- Add functionality to (equal)
  - Call operate(function, display.textContent, num2)
    - Above adds flexibility for both types of functions
    - Needs case of function held and no function held
    - Needs to call populateEquation()
    - Needs to populate results in display.textContent
  - Add functionality to remaining functions
    - Need to check if already holding a number, if so then call operate
      - This can't continue if display.textContent = 0
    - Display to numHolder, function pushed to functionHolder, populateEquation, clearDisplay
    * Addition will conflict with concatination, need to change strings to floats
- Ensure necessary variables are cleared on clear buttons
- Disallow squareroot of negative numbers
- Fix huge decimal points
- Create limit for number of digits
- Make beautiful
  - Add fade out to equation space for square, sqrt, factorial?
    - Add stacked previous executions in hidden overflow divs?

* There is an issue with new inputs concating to display.textContent after executing rather than replacing the display.textContent (need to setup a Boolean?)

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