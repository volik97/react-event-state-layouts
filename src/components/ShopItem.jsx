import '../App.css'
import PropTypes from 'prop-types'

export default function ShopItem({ item }) {
  return (
    <div className='shop-item'>
        <img className='item-img' alt='' src={item.img}/>
        <div className='item-name'>
            {item.name.toUpperCase()}
        </div>
        <div className='item-color'>
            {item.color.toLowerCase()}
        </div>
        <div className='item-price'>{'$' + item.price}</div>
        <button className='item-add-btn'>{'ADD TO CART'}</button>
    </div>
  )
}

ShopItem.propTypes = {
    item: PropTypes.object
}