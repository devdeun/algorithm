function solution(a, b) {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const day = new Date(`${a} ${b} 2016`).getDay();
    return days[day];
}