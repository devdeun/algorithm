function solution(n) {
    const DIVIDE_NUM = 1234567;
    let a = 0;
    let b = 1;
    let fibonacci = 0;
    for (let i = 2; i <= n; i++) {
       fibonacci = a + b;
        a = b % DIVIDE_NUM;
        b = fibonacci % DIVIDE_NUM;
    }
    
    return fibonacci % DIVIDE_NUM;
}