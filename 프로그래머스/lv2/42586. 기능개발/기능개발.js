function solution(progresses, speeds) {
    const answer = [];
    const endDays = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    
    let tempDay = endDays[0];
    let tempFeature = 0;
    endDays.forEach(day => {
       if (day <= tempDay) {
           tempFeature++;
       } else {
           answer.push(tempFeature);
           tempFeature = 1;
           tempDay = day;
       }
    });
    answer.push(tempFeature);

    return answer;
}