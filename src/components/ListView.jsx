import '../App.css'
import PropTypes from 'prop-types'
import ShopItem from './ShopItem'
import { v4 as uuidv4 } from 'uuid'

export default function ListView({ items }) {
  return (
    <div className='list-view'>
        {items.map((item) => <ShopItem item={item} key={uuidv4()}/>)}
    </div>
  )
}

ListView.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}