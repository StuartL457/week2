function Product(props) {
  return (
    <div>
      Product name = {props.name} <br></br>Product id = {props.id};<br></br>
      Product datePurchased = {props.datePurchased};<br></br>Product price ={' '}
      {props.price};
    </div>
  );
}

export default Product;
