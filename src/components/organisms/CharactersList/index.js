import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from '@emotion/styled-base'

import Character from './Character'

import actionCreators from '../../../actions'

import styles from './charactersList.styles'

const Wrapper = styled('div')(styles.wrapper)

class CharactersList extends Component {
  render() {
    const {
      characters: { data },
    } = this.props
    if (!data.results) {
      return null
    }
    return (
      <Wrapper>
        {data.results.map(characterData => (
          <Character key={characterData.id} data={characterData} />
        ))}
      </Wrapper>
    )
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
