function solution(places) {
  return places.map(place => {
    const people = [];
    const partitions = [];
    place.forEach((seats, i) => {
      seats.split("").forEach((seat, j) => {
        if (seat === "P") people.push([i, j]);
        if (seat === "X") partitions.push(`${i}${j}`);
      });
    });
    return checkFollowingRules(people, partitions);
  });
}

function checkFollowingRules(people, partitions) {
  for (let i = 0; i < people.length; i++) {
    for (let j = i + 1; j < people.length; j++) {
      const [r1, c1] = people[i];
      const [r2, c2] = people[j];
      const distance = Math.abs(r1 - r2) + Math.abs(c1 - c2);

      if (distance === 1) return 0;
      if (distance <= 2) {
        if (r1 === r2) {
          if (!partitions.includes(`${r1}${(c1 + c2) / 2}`)) return 0;
        } else if (c1 === c2) {
          if (!partitions.includes(`${r2 - 1}${c1}`)) return 0;
        } else {
          if (!(
              partitions.includes(`${r1}${c2}`) &&
              partitions.includes(`${r2}${c1}`))
          ) return 0;
        }
      }
    }
  }
  return 1;
}
