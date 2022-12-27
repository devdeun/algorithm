function solution(sides) {
    const [min, max] = sides.sort((a, b) => a - b);
    return 2 * min - 1;
}