import moment from 'moment'
import styled from '@emotion/styled'

import Heading from '../../../atoms/Heading'

import styles from './character.styles'

const Wrapper = styled('div')(styles.wrapper)
const Header = styled('div')(styles.header)
const HeaderDescription = styled('div')(styles.headerDescription)
const Description = styled('p')(styles.description)
const Image = styled('img')(styles.image)

const Character = ({ data }) => {
  const createdDate = moment(data.created)
  const currentDate = moment()
  const createdOn = currentDate.diff(createdDate, 'years')
  return (
    <Wrapper>
      <Header>
        <Image src={data.image} alt={data.name} title={data.name} />
        <HeaderDescription>
          <Heading level="3">{data.name}</Heading>
          <Description>{`id: ${data.id} - created ${createdOn} years ago`}</Description>
        </HeaderDescription>
      </Header>
    </Wrapper>
  )
}

export default Character
