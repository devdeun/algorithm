function solution(emergency) {
    const emergencyObj = {};
    [...emergency].sort((a, b) => b - a).forEach((num, i) => emergencyObj[num] = i + 1); 
    return emergency.map(num => emergencyObj[num]);
}