/*
This function will create an empty board for the game to be played
When it is finished, there will be 11 "row" divs, each containing four smaller "hole" divs and a submit/scoring div that starts out with a submit button and ends up with the scoring div
*/
const createBoard = () => {
  // This defines the createRow function, which will end up running 11 times
  // A row is a div that consists of 4 empty hole divs and a submit/scoring div
  const createRow = () => {
    const newRow = $("<div>").addClass("row");
    // Adds the empty hole divs
    for(let i = 0; i < 4; i++) {
      $("<div>").addClass("empty").appendTo(newRow);
    }

    // Adds the submit div
    const submitDiv = $("<div>").addClass("submit");
    $("<button>").text("Check guess").addClass("button--submit").appendTo(submitDiv);
    submitDiv.appendTo(newRow);
    return newRow;
  };

  const numRows = 11;
  for (let i = 0; i < numRows; i++) {
    $("#gameboard").append(createRow());
  }

  // Eventually, the last row needs to hold the computer's guess and have a "play again?" button instead of a "check guess" button
  // const lastRow = $("div#gameboard ")
};

module.exports = createBoard;