function solution(my_string) {
    return my_string.split("").reduce((acc, cur) => {
        const s = cur.toUpperCase() === cur ? cur.toLowerCase() : cur.toUpperCase();
        return acc + s;
    }, "");
}