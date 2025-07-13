
import './CategoryBar.css';

function CategoryBar() {
  const categories = [
    'All',
    'Amazon miniTV',
    'Sell',
    'Best Sellers',
    'Mobiles',
    "Today's Deals",
    'Electronics',
    'Prime',
    'Fashion',
    'Customer Service',
    'New Releases',
    'Home & Kitchen',
    'Gift Ideas',
    'Amazon Pay',
    'Computers',
    'Beauty',
    'Toys & Games',
    'Books',
    'Grocery'
  ];

  return (
    <div className="categoryBar">
      {categories.map((category, index) => (
        <div className="categoryItem" key={index}>
          {category}
        </div>
      ))}
    </div>
  );
}

export default CategoryBar;
