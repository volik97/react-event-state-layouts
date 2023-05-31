import { Component} from 'react'
import products from '../data/data'
import PropTypes from 'prop-types'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView'
import ListView from './ListView'
import '../App.css'


export default class StoreCC extends Component {
  constructor(){
    super()
    this.layouts = ['view_module', 'view_list']
    this.state = {
      layout: this.layouts[0],
      products: products
    }
  }

  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
  }

  switchLayout = () => {
    this.setState({
      layout: this.state.layout === this.layouts[0] ? this.layouts[1] : this.layouts[0]
    })
  }

  render() {
    return (
      <div className='store'>
        <div className='layout'>
          <IconSwitch icon={this.state.layout} onSwitch={this.switchLayout}/>   
        </div>
         <div>
           {this.state.layout === this.layouts[0] ? <ListView items={this.state.products}/> : <CardsView cards={this.state.products}/>}
        </div>
      </div>
    )
  }
}

