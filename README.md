2021-06-03 Post Mortem
- I learned A LOT doing this project. The project started easily enough: by just creating the different mathemical functions that I'd need to use in the calculator. I even decided to add a few extras because they weren't so different from the suggested project spec. This was half-right, in that that they may not have been so different, but they did add another few things to check with each change and addition to the code. 
- I really underestimated how much was required from that point on. The project kept building on itself and with each new layer of complexity I had to step back, re-evaluate what I'd completed two steps down, and make sure that everything was working as intended as code cascaded down. It truly felt like one step forward, two steps back a couple times during this project. This was felt mostly while I was figuring out how to hold the different variables as I added complexity to the functionality of the calculator. A lot of this was me wanting to create the calculator as I expect one to work, rather than simply to complete the project. For example, I wanted to be able to self-correct if the wrong button was push. This caused me to take steps backward to check how variables were stored and create failsafe cases for times where I meant to push "-" but accidentally hit "+" or when I wanted the looping of functions to behave propely (not recursively). I also decided to add an on/off toggle and functions to make sure the numbers and equations wouldn't overflow the screen. While neither of these were terribly difficult to implement, nor really required me to stare at my code for hours, they did add extra complexity to an already somewhat complex project.
- Bug fixing causes bugs. This is something that I knew, but now I understand. It's amazing how fixing one bug causes another in an almost endless chain of events. I spent a lot of time throughout this project fixing bugs before moving on and paid special attention to documenting bugs when I came across them as well as the conditions that made them whenever possible. This was another rabbit hole that ended up taking much more of my time than I had initially expected it to. Luckily, with each bug I found, I discovered a trick or solution to possible issues in the future. Today's was particularly noteworthy. I was having an issue when the first number in a multiple number equation was 0. In these situations, the code wasn't executing properly. I guessed that it was because JavaScript was seeing "0" and thinking "false," but even with this knowledge it took and hour to find and fix the problem. 
- I also spent a lot more time on the CSS of this project, trying to make it aesthetically pleasing as well as functional. It's not perfect, but I'm pleased with how it has turned out. If I want to practice more CSS in the future, I will make a toggle akin to darkmode that will completely change the look, feel, and arrangement of the calculator. I think this will be a good way to continue practicing, boost this project further, and learn some more about JS and CSS but for now I'm ready to move forward to the next project!
    
2021-06-03
- Implented Table of Contents for easier searching in CSS and JS files
- Added a small easter egg to prevent crashes
- Minor tweaks to button acuation and aesthetics
- Bug fixed: If page is reset while calculator is on, the toggle would work opposite to expection (always worked as intended in chrome)
  - Changed the toggle class to be dependent on the checkbox; the animation position still doesn't reset, but the checkbox behavior works as expected
- Bug fixed: Two-number functions now work as intended when the first number is "0"
  - My condition was checking >>if (!firstNumber)<< which was registering as false when firstNumber == 0

2021-06-02 
- CSS Styling for calculator has been completed
- On/Off toggle implemented
  - Correctly clears display and equation space when toggled
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