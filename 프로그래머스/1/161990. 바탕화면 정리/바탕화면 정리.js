function solution(wallpaper) {
    const result = [wallpaper.length, wallpaper[0].length, 0, 0];
    
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[0].length; j++) {
            if (wallpaper[i][j] === '#') {
                result[0] = Math.min(i, result[0]);
                result[1] = Math.min(j, result[1]);
                result[2] = Math.max(i + 1, result[2]);
                result[3] = Math.max(j + 1, result[3]);
            }
        }
    }
      
    return result;
}