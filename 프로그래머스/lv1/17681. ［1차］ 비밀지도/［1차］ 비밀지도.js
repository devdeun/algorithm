function solution(n, arr1, arr2) {
    return arr1.map((num, i) => {
        let codeNum = (num | arr2[i]).toString(2);
        codeNum = "0".repeat(n - codeNum.length) + codeNum; 
        return codeNum.toString(2).replace(/1/g, "#").replace(/0/g, " ");
    });
}