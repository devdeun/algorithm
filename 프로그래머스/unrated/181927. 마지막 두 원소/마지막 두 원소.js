function solution(num_list) {
    const lastIndex = num_list.length - 1;
    const lastNum = num_list[lastIndex];
    const prevLastNum = num_list[lastIndex - 1];
    lastNum > prevLastNum ? num_list.push(lastNum - prevLastNum) : num_list.push(lastNum * 2);
    return num_list;
}