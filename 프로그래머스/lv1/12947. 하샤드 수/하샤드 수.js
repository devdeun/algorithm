function solution(x) {
    const cipherList = String(x).split("")
    const sumOfCiphers = cipherList.reduce((a, b) => a + +b, 0);

    return x % sumOfCiphers ? false : true;
}