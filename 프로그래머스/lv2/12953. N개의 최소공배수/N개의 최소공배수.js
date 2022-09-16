function solution(arr) {
    return arr.reduce((acc, cur) => {
        let a = acc;
        let b = cur;
        while (b !== 0) {
            const remainder = a % b;
            a = b;
            b = remainder;
        }
        return (acc * cur) / a; 
    });
}