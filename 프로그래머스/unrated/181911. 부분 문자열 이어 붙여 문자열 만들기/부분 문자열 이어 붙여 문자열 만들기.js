function solution(my_strings, parts) {
    return my_strings.reduce((acc, cur, i) => {
        const [start, end] = parts[i];
        return acc + cur.slice(start, end + 1);
    }, "");
}