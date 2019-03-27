//given a number n print a staircase consisting of
//  spaces and #s that is right aligned and has a
//  height and base width of n.

//      ex/  if n = 4, you would print
//                 #
//                ##
//               ###
//              ####

const staircase = n => {
  let stair = "";
  for (let i = 1; i <= n; i++) {
    let space = "";
    stair += "#";
    for (let j = n - i; j > 0; j--) {
      space += " ";
    }
    console.log(space + stair);
  }
};

staircase(5);
