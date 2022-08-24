function solution(s) {
    return (s.length === 4 || s.length === 6) && s === s.replace(/[^0-9]/g,"");
}