import React, { useContext } from 'react';
import './Css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../componenets/Assets/dropdown_icon.png';
import Item from '../componenets/Item/Item';

const ShopCategory = (props) => {
  const products = useContext(ShopContext); // Get the context value

  // Loading state check
  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  // Filter products based on the selected category
  const filteredProducts = products.filter(item => item.category === props.category);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className='shop-category-indexSort'>
        <p>
          <span>Showing 1-{Math.min(12, filteredProducts.length)}</span> out of {filteredProducts.length} products
        </p>
        <div>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.map((item, i) => (
          <Item
            key={item.id} // Using item.id for a more stable key
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopCategory;
