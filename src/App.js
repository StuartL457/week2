import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Product from './Product';

ReactDOM.render(<App />, document.getElementById('root'));

function clickHandeler() {
  window.alert(
    toString(
      <Product name="apple" id="123" datePurchased="12/10/21" price="£0.50" />
    )
  );
}

function App() {
  return (
    <div>
      <Product name="apple" id="123" datePurchased="12/10/21" price="£0.50" />

      <button onClick={clickHandeler}>Click Me!</button>
    </div>
  );
}

export default App;
