function solution(str_list) {
    const lIndex = str_list.indexOf("l") > -1 ? str_list.indexOf("l"): str_list.length;
    const rIndex = str_list.indexOf("r") > -1 ? str_list.indexOf("r"): str_list.length;
    if (lIndex === -1 && rIndex === -1) return [];
    return lIndex < rIndex ? str_list.slice(0, lIndex) : str_list.slice(rIndex + 1);
}