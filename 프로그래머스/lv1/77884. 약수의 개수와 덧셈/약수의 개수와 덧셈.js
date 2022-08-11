function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        answer += divisorCount(i) % 2 ? -i : i;
    }
    return answer;
}

function divisorCount(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (!(num % i)) count++;
    }
    return count;
}