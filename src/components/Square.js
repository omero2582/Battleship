const Square = () => {
  let hit = false;
  let myShip = null;
  const setShip = (ship) => (myShip = ship);
  const getShip = () => myShip;
  const isHit = () => hit;
  const isEmpty = () => getShip() === null;
  const hasShip = () => !isEmpty;
  const hitSquare = () => {
    hit = true;
    console.log('hit');
    if (!isEmpty()) {
      myShip.hit();
      console.log('hit ship');
    }
  };

  return {
    setShip,
    getShip,
    isHit,
    isEmpty,
    hitSquare,
    hasShip,
  };
};

export default Square;
