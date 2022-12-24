function solution(array) {
    const count = Array(Math.max(...array) + 1).fill(0);
    array.forEach(num => count[num]++);
    const max = Math.max(...count);
    return count.indexOf(max) === count.lastIndexOf(max) ? count.indexOf(max) : -1;  
}