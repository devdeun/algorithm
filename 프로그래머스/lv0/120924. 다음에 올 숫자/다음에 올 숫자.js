function solution(common) {
    const d = common[1] - common[0];
    const r = common[1] / common[0];
    const last = common[common.length - 1];
    return common[1] + d === common[2] ? last + d : last * r;
}