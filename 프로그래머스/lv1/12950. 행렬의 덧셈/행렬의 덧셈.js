function solution(arr1, arr2) {
    const answer = arr1.map((arr, i) => arr.map((num, j) => num + arr2[i][j]));
    return answer;
}
