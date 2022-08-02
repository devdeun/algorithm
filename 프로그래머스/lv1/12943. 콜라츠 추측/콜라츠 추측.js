function solution(num) {
    let result = 0;
    let collatzNum = num;
    
    while (collatzNum > 1 && result < 500) {
        collatzNum = collatzNum % 2 ? collatzNum * 3 + 1 : collatzNum / 2;
        result++;
    }
    
    return collatzNum === 1 ? result : -1;
}