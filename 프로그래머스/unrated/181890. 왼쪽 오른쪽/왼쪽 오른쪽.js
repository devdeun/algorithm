function solution(str_list) {
    const lIndex = str_list.indexOf("l") > -1 ? str_list.indexOf("l"): 20;
    const rIndex = str_list.indexOf("r") > -1 ? str_list.indexOf("r"): 20;
    if (lIndex === -1 && rIndex === -1) return [];
    console.log(lIndex, rIndex);
    return lIndex < rIndex ? str_list.slice(0, lIndex) : str_list.slice(rIndex + 1);
}