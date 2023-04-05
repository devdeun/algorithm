/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for (let row in image) {
        image[row] = image[row].reverse();
        image[row] = image[row].map(x => 1 - x);
    }
    return image;
};