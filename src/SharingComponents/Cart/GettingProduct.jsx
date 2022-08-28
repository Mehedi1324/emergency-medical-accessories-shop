import { useEffect, useState } from 'react';

const GettingProduct = () => {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:1010/card')
      .then((res) => res.json())
      .then((data) => setCartProducts(data));
  }, []);
  return { cartProducts, setCartProducts };
};

export default GettingProduct;
