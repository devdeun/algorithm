function solution(myStr) {
    const result = myStr.split(/[a-c]/).filter(s => s);
    return result.length ? result : ["EMPTY"];
}