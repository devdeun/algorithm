function solution(s, n) {
    return s.replace(/[A-Z]/gi, (str) => replaceString(str, n));
}

function replaceString(str, n) {
    const isLowerCase = str === str.toLowerCase();
    let charCode = str.charCodeAt() + n;
    // a(97) - z(122), A(65) - Z(90)
    if (isLowerCase) {
        charCode = charCode > 122 ? charCode - 26 : charCode;
    } else{
        charCode = charCode > 90 ? charCode - 26 : charCode;
    }

    return String.fromCharCode(charCode);
}