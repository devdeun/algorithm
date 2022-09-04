function solution(record) {
    const nicknames = {};
    const result = [];
    
    record.forEach(s => {
        const [state, id, nickname = nicknames[id]] = s.split(" ");
        nicknames[id] = nickname;
    });
    
    record.forEach(s => {
        const [state, id] = s.split(" ");
        if (state === "Enter") result.push(`${nicknames[id]}님이 들어왔습니다.`);
        if (state === "Leave") result.push(`${nicknames[id]}님이 나갔습니다.`);
    });
    
    return result;
}