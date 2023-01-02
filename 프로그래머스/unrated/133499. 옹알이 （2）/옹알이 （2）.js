function solution(babbling) {
    return babbling.reduce((acc, cur) => {
        if (cur.match(/(ayaaya|yeye|woowoo|mama)/g)) return acc;
        return cur.replace(/(aya|ye|woo|ma)/g, "").length ? acc : acc + 1;
    }, 0);
}