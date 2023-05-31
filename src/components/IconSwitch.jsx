import PropTypes from 'prop-types'
import '../App.css'

export default function IconSwitch({ icon, onSwitch}) {
  return (
        <div className='material-icons' onClick={onSwitch}>{icon}</div>
  )
}

IconSwitch.propTypes = {
    icon: PropTypes.string,
    onSwitch: PropTypes.func
}
