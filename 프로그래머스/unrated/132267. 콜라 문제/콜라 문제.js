function solution(a, b, n) {
    let count = 0;
    let bottle = n;
    while (bottle >= a) {
        const newBottle = Math.floor(bottle / a) * b;
        count += newBottle;
        bottle = newBottle + bottle % a;
    }
    return count;
}