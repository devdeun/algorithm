function solution(babbling) {
    return babbling.filter(s => s.replace(/(aya|ye|woo|ma)/g, "") === "").length;
}