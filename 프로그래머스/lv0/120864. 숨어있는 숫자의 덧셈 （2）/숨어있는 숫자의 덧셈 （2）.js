function solution(my_string) {
    return my_string.replace(/[A-Z]/gi, ".").split(".").reduce((acc, cur) => {
        return acc + +cur;
    }, 0);
}