import GettingProduct from './GettingProduct';

const AddingProduct = () => {
  const { cartProducts, setCartProducts } = GettingProduct();

  const handleAddtoCart = (product) => {
    const exist = cartProducts.find((pd) => pd._id === product._id);
    let newCart = [];
    if (exist) {
      const rest = cartProducts.filter((pd) => pd._id !== product._id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    } else {
      product.quantity = 1;
      newCart = [...cartProducts, product];
    }
    setCartProducts(newCart);

    fetch('http://localhost:1010/card', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCart),
    });
  };

  return { handleAddtoCart };
};

export default AddingProduct;
