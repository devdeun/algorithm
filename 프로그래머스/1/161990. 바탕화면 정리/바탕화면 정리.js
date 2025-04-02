function solution(wallpaper) {
    const left = [];
    const top = [];
    const right = [];
    const bottom = [];
    
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[0].length; j++) {
            if (wallpaper[i][j] === '#') {
                left.push(i);
                top.push(j);
                right.push(i + 1);
                bottom.push(j + 1);
            }
        }
    }
      
    return [Math.min(...left), Math.min(...top), Math.max(...right), Math.max(...bottom)];
}