import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import actionCreators from '../../../actions'

class CharactersList extends Component {
  render() {
    const {
      characters: { data },
    } = this.props
    return <p>{data && data.info.count}</p>
  }
}

const mapStateToProps = ({ characters }) => {
  return {
    characters,
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersList)
