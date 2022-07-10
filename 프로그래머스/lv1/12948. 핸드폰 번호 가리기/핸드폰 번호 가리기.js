function solution(phone_number) {
    const replaceLength = phone_number.length - 4;
    const lastNumbers = phone_number.slice(-4);
  
    return '*'.repeat(replaceLength).concat(lastNumbers);
}