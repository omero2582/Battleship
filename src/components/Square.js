const Square = () => {
  let hit = false;
  let myShip = null;
  const setShip = (ship) => (myShip = ship);
  const getShip = () => myShip;
  const isHit = () => hit;
  const isEmpty = () => getShip() === null;
  const hasShip = () => !isEmpty;
  const isEmptyHit = () => isEmpty() && isHit(); // maybe get rid of this, caller can get confused
  const hitSquare = () => {
    hit = true;
    if (!isEmpty()) {
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
    hasShip,
  };
};

export default Square;
