
import './Checkout.css';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../store/basketSlice';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const basket = useSelector(selectBasketItems);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/S23Ultra/Launch/D98758687_IN_WLME_Samsung_S23_Ultra_DesktopTallHero_1500x300._CB612145699_.jpg"
          alt="Ad"
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.length === 0 ? (
            <p>Your basket is empty.</p>
          ) : (
            basket.map((item, i) => (
              <CheckoutProduct key={i} {...item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
