import '../App.css'
import PropTypes from 'prop-types'

export default function ShopCard({ card }) {
  return (
    <div className='shop-card'>
        
        <div className='card-name'>
            {card.name.toUpperCase()}
        </div>
        <div className='card-color'>
            {card.color.toLowerCase()}
        </div>
        <img className='card-img' alt='' src={card.img}/>
        <div className='priceAndButton'>
            <div className='card-price'>{'$' + card.price}</div>
            <button className='card-add-btn'>{'ADD TO CART'}</button>
        </div>
    </div>
  )
}

ShopCard.propTypes = {
    card: PropTypes.object
}