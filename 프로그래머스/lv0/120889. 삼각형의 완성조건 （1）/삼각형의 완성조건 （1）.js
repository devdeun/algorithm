function solution(sides) {
    const long = Math.max(...sides);
    const sum = sides.reduce((acc, cur) => acc + cur, 0) - long;
    return sum > long ? 1 : 2;
}