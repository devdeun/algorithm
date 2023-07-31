function solution(intStrs, k, s, l) {
    return intStrs.map(str => +str.substr(s, l)).filter(n => n > k);
}