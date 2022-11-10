function solution(s) {
    const array = s.split("").sort();
    let answer = "";
    for (let i = 0; i < array.length; i++) {
        if (array.lastIndexOf(array[i]) === i) answer += array[i];
        i = array.lastIndexOf(array[i]);
    }
    return answer;
}