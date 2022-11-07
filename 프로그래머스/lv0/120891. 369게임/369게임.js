function solution(order) {
    return String(order).split("").reduce((acc, cur) => {
        return cur % 3 || +cur === 0 ? acc : ++acc;
    }, 0);
}