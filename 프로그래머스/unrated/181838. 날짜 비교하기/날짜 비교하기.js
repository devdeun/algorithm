function solution([year1, month1, day1], [year2, month2, day2]) {
    const date1 = new Date(year1, month1 - 1, day1);
    const date2 = new Date(year2, month2 - 1, day2);
    return date1 < date2 ? 1 : 0;
}