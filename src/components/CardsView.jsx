import '../App.css'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard'
import { v4 as uuidv4} from 'uuid'

export default function CardsView({ cards }) {
  return (
    <div className='cards-view'>
        {cards.map((card) => <ShopCard card={card} key={uuidv4()}/>)}
    </div>
  )
}

CardsView.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object)
}