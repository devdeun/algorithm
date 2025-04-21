function solution(new_id) {
    let recommend_id = new_id.toLowerCase()
        .replace(/[^a-z\d-_.]+/g, "")
        .replace(/\.+/g, ".")
        .replace(/^\.|\.$/, "");
    
    if (!recommend_id.length) {
        recommend_id = "a";
    }
        
    recommend_id = recommend_id.slice(0, 15).replace(/\.$/, "");
    
    if (recommend_id.length <= 2) {
        const lastString = recommend_id.slice(-1);
        while(recommend_id.length < 3) {
            recommend_id += lastString;
        }
    }

    return recommend_id;
}