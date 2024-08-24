import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus , faMinus} from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../context/StoreContext';



const FoodItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image}  alt="" className="food-item-image" />
            {
              !cartItems[id]? <FontAwesomeIcon
              icon={faPlus}
              className='add'
              onClick={() => addToCart(id) } />
              : <div className="food-item-counter">
                  <FontAwesomeIcon icon={faMinus} style={{color: "#38e22c",}} onClick={() => removeFromCart(id)} />
                  <p>{cartItems[id]}</p>
                  <FontAwesomeIcon icon={faPlus} style={{color: "#fe2020",}} onClick={() => addToCart(id)}/>
              </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_star} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>

      
    </div>
  )
}


export default FoodItem
