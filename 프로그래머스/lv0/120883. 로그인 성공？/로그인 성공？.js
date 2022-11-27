function solution(id_pw, db) {
    const [id, pw] = id_pw;
    const getUser = db.filter(user => user[0] === id)[0];
    if (!getUser) return "fail";
    return getUser[1] === pw ? "login" : "wrong pw";
}