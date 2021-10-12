import React from 'react';

function Product(props) {
  return (
    <div>
      name = {props.name} 
      <br></br>id = {props.id}
      <br></br>datePurchased = {props.datePurchased}
      <br></br>price = {props.price}
    </div>
  );
}

export default Product;
