function solution(hp) {
    let minCount = hp;
    const getCount = (a, b) => {
        let remainder;
        const first = Math.floor(hp / a);
        remainder = hp - first * a;
        const second = Math.floor(remainder / b);
        remainder -= second * b;
        return first + second + remainder;
    }
    return Math.min(getCount(5, 3), getCount(3, 5));
}