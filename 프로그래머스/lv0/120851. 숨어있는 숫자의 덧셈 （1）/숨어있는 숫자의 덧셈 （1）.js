function solution(my_string) {
    return my_string.split("").reduce((acc, cur) => isNaN(+cur) ? acc : acc + +cur , 0);
}