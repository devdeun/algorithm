function solution(my_string) {
    const result = Array(52).fill(0);
    for (let i = 0; i < my_string.length; i++) {
        const charCode = my_string.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result[charCode - 65]++;
        } else {
            result[charCode - 97 + 26]++;
        }
    }
    return result;
}