function solution(s) {
    let result = s;
    let convertCount = 0;
    let deleted = 0;
    
    while(result !== "1") {
        const prevLength = result.length;
        result = result.split("0").join("");
        const currLength = result.length;
        result = currLength.toString(2);
        
        deleted += prevLength - currLength;
        convertCount++;
    }
    
    return [convertCount, deleted];
}