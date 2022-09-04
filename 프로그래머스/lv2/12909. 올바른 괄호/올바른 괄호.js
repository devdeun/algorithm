function solution(s){
    const bracketStack = [];
    s.split("").forEach(bracket => {
        if (bracket === ")" && 
            bracketStack[bracketStack.length - 1] === "(") {
            bracketStack.pop();
        } else {
            bracketStack.push(bracket);
        }
    });
    
    return bracketStack.length ? false : true;
}