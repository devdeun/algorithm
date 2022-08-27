function solution(s) {
    return s.toLowerCase().replace(/(^|\s)\S/g, first => first.toUpperCase());
}