const Ship = (length) => {
  let hits = 0;
  const getHits = () => hits;
  return {
    getLength: () => length,
    getHits,
    hit() {
      hits += 1;
      return getHits();
    },
    isSunk: () => hits >= length,
    // allowedSetPosition: (index) => {
    //   const [rightSet, leftSet, downSet, upSet] = out;
    //   const [rightInc, leftInc, downInc, upInc];
    //   for (let i = index; i < length; i += 1) {
    //     rightSet.push(i);
    //     downSet.push()
    //   }
    // },
  };
};

export default Ship;
