const Square = () => {
  let hit = false;
  let myShip = null;
  const setShip = (ship) => (myShip = ship);
  const getShip = () => myShip;
  const isHit = () => hit;
  const isEmpty = () => getShip === null;
  const isEmptyHit = () => isEmpty && isHit;
  const hitSquare = () => {
    hit = true;
    if (!isEmpty) {
      myShip.hit();
    }
  };

  return {
    setShip,
    getShip,
    isHit,
    isEmpty,
    isEmptyHit,
    hitSquare,
  };
};

export default Square;
