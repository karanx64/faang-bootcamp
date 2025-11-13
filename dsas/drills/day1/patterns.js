function rightAngledStarTriangle(num) {
  process.stdout.write("Right Angled Star Triange: \n");
  //for the rows
  for (let i = 1; i <= num; i++) {
    //for the starts on a line
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
      // console.log("*") prints a new line after each star
    }
    process.stdout.write("\n"); //new line after each row
  }
}

function invertedStarTiangle(num) {
  process.stdout.write("Inverted Star Triangle: \n");
  for (let i = num; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

//done
function centerdStarPyramid(num) {
  process.stdout.write("Centered Star Pyramid:\n");
  //i loop for rows
  for (let i = num; i >= 1; i--) {
    //j loop for spaces before star
    for (let j = 1; j <= i; j++) {
      process.stdout.write(" ");
    }
    // k loop for stars after spaces
    for (let k = 0; k <= num - i; k++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}

rightAngledStarTriangle(5);
invertedStarTiangle(5);
centerdStarPyramid(5);
