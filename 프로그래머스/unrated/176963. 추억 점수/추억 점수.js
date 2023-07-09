function solution(names, yearning, photos) {
    return photos.map(photo => photo.reduce((sum, name) => {
        const score = yearning[names.indexOf(name)] || 0;
        return sum + score;
    }, 0));
}