function solution(wallpaper) {
    let lux = wallpaper.length;
    let luy = wallpaper[0].length;
    let rdx = 0;
    let rdy = 0;
    
    for (let i = 0; i < wallpaper.length; i++) {
        if (!wallpaper[i].includes('#')) continue;
        
        lux = Math.min(lux, i);
        rdx = Math.max(rdx, i + 1);
        luy = Math.min(luy, wallpaper[i].indexOf('#'));
        rdy = Math.max(rdy, wallpaper[i].lastIndexOf('#') + 1);
    }
      
    return [lux, luy, rdx, rdy];
}