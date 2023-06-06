function solution(num_list) {
    const sum = [0, 0];
    num_list.forEach((num, i) => sum[i % 2] += num);
    return Math.max(...sum);
}