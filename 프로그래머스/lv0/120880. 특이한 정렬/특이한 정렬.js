function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const gap = Math.abs(a - n) - Math.abs(b - n);
        return gap ? gap : b - a;
    });
}