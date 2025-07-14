
import './Product.css';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../store/basketSlice';

function Product({ id, title, price, image, rating }) {
  const dispatch = useDispatch();

  const addToBasketHandler = () => {
    dispatch(addToBasket({ id, title, price, image, rating }));
  };

  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>₹</strong>{price}
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>

        
      </div>
      <button onClick={addToBasketHandler}>Add to Basket</button>
    </div>
  );
}

export default Product;
