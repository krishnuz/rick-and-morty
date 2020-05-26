import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

import actionCreators from '../../../redux/actions'

import styles from './counter.styles'

const Wrapper = styled('div')(styles.wrapper)
const Paragraph = styled('p')(styles.paragraph)
const Button = styled('button')(styles.button)

const Counter = props => {
  const {
    counter,
    actions: { incrementCount },
  } = props
  const handleClick = () => {
    incrementCount()
  }
  return (
    <Wrapper>
      <Paragraph>Count: {counter.count}</Paragraph>
      <Button onClick={handleClick}>Increment count</Button>
    </Wrapper>
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
