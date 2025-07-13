
import './CheckoutProduct.css';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../store/basketSlice';

function CheckoutProduct({ id, image, title, price, rating }) {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price"><strong>₹</strong>{price}</p>
        <div className="checkoutProduct__rating">
          {Array(rating).fill().map((_, i) => <span key={i}>⭐</span>)}
        </div>
        <button onClick={removeItem}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
