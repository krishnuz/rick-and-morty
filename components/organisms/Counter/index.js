import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import actionCreators from '../../../redux/actions'

const Counter = props => {
  const {
    counter,
    actions: { incrementCount },
  } = props
  const handleClick = () => {
    incrementCount()
  }
  return (
    <div>
      <button onClick={handleClick}>Increment counter</button>
      <p>Count: {counter.count}</p>
    </div>
  )
}

const mapStateToProps = ({ counter }) => ({
  counter,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
