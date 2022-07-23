function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0);
    const userObj = {};
    id_list.forEach(id => userObj[id] = new Set());
    report.forEach(str => {
        const [user, badUser] = str.split(" ");
        userObj[badUser].add(user);
    });
    
    const badUsers = [];
    for (const user in userObj) {
        if( userObj[user].size >= k) {
            badUsers.push(user);
        }
    }
    
    const reportList = [];
    badUsers.forEach(badUser => {
        reportList.push.apply(reportList, [...userObj[badUser].keys()]);
    });
    
    reportList.forEach(user => {
        const index =  id_list.indexOf(user);
        answer[index]++;
    });
    
    return answer;
}