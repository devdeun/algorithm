/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  const position = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    switch(moves[i]) {
      case "R": position[0]++; break;
      case "L": position[0]--; break;
      case "U": position[1]--; break;
      case "D": position[1]++; break;
      default: break;
    } 
  }
  return !position[0] && !position[1];
};