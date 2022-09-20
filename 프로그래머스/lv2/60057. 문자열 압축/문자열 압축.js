function solution(s) {
    let minCompactS = s;
    for (let unit = 1; unit <= s.length; unit++) {
        let prevRepeat;
        let compactS = "";
        let times = 0;
        for (let i = 0; i < s.length; i += unit) {
            const currRepeat = s.substr(i, unit);
            if (!prevRepeat) prevRepeat = currRepeat;
            if (prevRepeat === currRepeat) {
                times++;                
            } else {
                compactS += times > 1 ? times + prevRepeat : prevRepeat;
                prevRepeat = currRepeat;
                times = 1;
            }
        }   
        compactS += times > 1 ? times + prevRepeat : prevRepeat;
        minCompactS = minCompactS.length > compactS.length ? compactS : minCompactS;
    }
    return minCompactS.length;
}