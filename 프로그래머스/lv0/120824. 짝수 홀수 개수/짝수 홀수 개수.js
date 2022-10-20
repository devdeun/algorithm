function solution(num_list) {
    let even = 0;
    let odd = 0;
    num_list.forEach(num => num % 2 ? odd++ : even++);
    return [even, odd];
}