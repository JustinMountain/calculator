TODO:
- Make beautiful
- Make a traditional/futuristic aesthetic toggle
- Add Easter Eggs
BUG: If page is reset while calculator is on, the toggle doesn't reset position
    
2021-06-02 
- On/Off toggle implemented
- Established CSS variables to control colors
- Setup link to GitHub
- Fixed bug: Exponent function now properly computes when forwarding to another function
- Fixed bug: Exponent, square, and squareroot now function properly

2021-05-31
- Added the checkLength() function:
  - Numbers equal to or greater than 100,000,000 or converted to exponential values
  - Numbers that are longer than 12 are truncated to an appropriate number of decimal points 
- Fixed bug: Pressing the equals key multiple times in a row will now loop as expected
- Fixed bug: Keyboard shortcut for "." now works as intended
- Fixed bug: display no longer clears when inputting only a number and hitting return. This allows the number to be carried forward to a function as expected.

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