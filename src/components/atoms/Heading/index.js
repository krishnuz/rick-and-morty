import styled from '@emotion/styled'

import styles from './heading.styles'

const Heading = ({ level = 1, size, ...remainingProps }) => {
  const H = styled(`H${level}`)(styles[`h${size || level}`])
  return <H {...remainingProps} />
}

export default Heading
