/*
This function will run the following functions:
0. (createHeader to make the title header)
1. createBoard to initialize the board
2. addDrag to make marbles draggable
3. addSubmit to make submit buttons run the submit function

Later, I may add the following
3. activateRow to make the first row active
  a. make empty divs viable drag targets
  b. add the submit button to the submit div

*/

const createBoard = require("./create-board");

createBoard();