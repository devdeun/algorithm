function solution(s){
    const lowerS = s.toLowerCase();
    return lowerS.split("p").length === lowerS.split("y").length;
}