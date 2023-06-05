function solution(arr, n) {
    let i = arr.length % 2 ? 0 : 1; 
    while (i < arr.length) {
        arr[i] += n;
        i += 2;
    }
    
    return arr;
}