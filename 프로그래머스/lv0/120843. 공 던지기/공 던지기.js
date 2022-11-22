function solution(numbers, k) {
    const array = [];
    for (let i = 0; i < Math.ceil(k / (numbers.length / 2)); i++) {
        array.push(...numbers);    
    }
    return array[k * 2 - 2];
}