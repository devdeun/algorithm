function solution(wallpaper) {
    const hasFile = wallpaper.map(s => s.includes('#'));
    const lux = hasFile.indexOf(true);
    const rdx = hasFile.lastIndexOf(true) + 1;
    
    const luy = wallpaper.reduce((acc, cur) => {
        const idx = cur.indexOf('#')
        return idx >= 0 ? Math.min(acc, idx) : acc;
    }, wallpaper[0].length);
    const rdy = wallpaper.reduce((acc, cur) => Math.max(acc, cur.lastIndexOf('#')), 0) + 1;
      
    return [lux, luy, rdx, rdy];
}