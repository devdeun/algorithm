function solution(num_list) {
    const multiply = num_list.reduce((a, c) => a * c, 1);
    const sum = num_list.reduce((a, c) => a + c, 0);
    return +(multiply < Math.pow(sum, 2));
}