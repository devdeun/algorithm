function solution(my_string) {
    const stringArr = [];
    for (let i = 0; i < my_string.length; i++) {
        if (stringArr.indexOf(my_string[i]) === -1) stringArr.push(my_string[i]);
    }
    return stringArr.join("");
}