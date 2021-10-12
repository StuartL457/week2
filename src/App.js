import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Product from './Product';

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  return (
    <div>
      <Product name="apple" id="123" datePurchaced="12/10/21" price="£0.50" />
    </div>
  );
}

export default App;
