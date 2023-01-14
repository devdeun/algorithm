function solution(brown, yellow) {
    let brownCount = 0;
    let line = 1;
    while (true) {
        brownCount = (yellow / line + 2) * 2 + line * 2;
        if (brownCount === brown) return [yellow / line + 2, line + 2];
        line++;
    }
}