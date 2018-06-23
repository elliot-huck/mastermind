/*
This function will create an empty board for the game to be played
When it is finished, there will be 11 "row" divs, each containing four smaller "hole" divs and a submit/scoring div that starts out with a submit button and ends up with the scoring div
*/
const createBoard = () => {
  // This defines the createRow function, which will end up running 11 times
  // A row is a div that consists of 4 hole divs and a submit/scoring div
  const createRow = () => {
    const newRow = $("<div>").addClass("row");
    for(i = 0; i < 4; i++) {
      $("<div>").addClass("hole").appendTo(newRow);
    }
    $("<div>").addClass("submit").appendTo(newRow);
  };


};