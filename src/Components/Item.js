import React, { useState } from "react";
function Item({ description, onRemove }) {

  const [check, setCheck] = useState(false);

  //wrapper function
  const handleCheck = () => {
    setCheck(!check);
  }
  return <li style={{ textDecoration: check ? 'line-through' : 'none'}}>{description}  <span onClick={onRemove}>X</span> <span onClick={handleCheck}>V</span></li>;
}

export default Item;
