import { Formik, Form } from 'formik'
import { withRouter } from 'next/router'
import styled from '@emotion/styled'

import Heading from '../../atoms/Heading'
import Filter from '../../molecules/Filter'

import styles from './filters.styles.js'

const CharacterFilter = styled(Filter)(styles.filter)

const Filters = ({ router }) => {
  const handleOnChange = event => {
    router.push({
      pathname: '/',
      query: {
        ...router.query,
        [event.target.name]: event.target.value,
      },
    })
  }
  const speciesFilterData = [
    {
      label: 'Human',
      value: 'human',
    },
    {
      label: 'Mytholog',
      value: 'mytholog',
    },
    {
      label: 'Humanoid',
      value: 'humanoid',
    },
    {
      label: 'Alien',
      value: 'alien',
    },
  ]
  const genderFilterData = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
    {
      label: 'Genderless',
      value: 'genderless',
    },
    {
      label: 'Unknown',
      value: 'unknown',
    },
  ]
  return (
    <div>
      <Heading level="2">Filters</Heading>
      <Formik
        initialValues={{
          species: '',
          gender: '',
        }}
      >
        <Form>
          <CharacterFilter
            heading="Species"
            name="species"
            data={speciesFilterData}
            onChange={handleOnChange}
          />
          <CharacterFilter
            heading="Gender"
            name="gender"
            data={genderFilterData}
            onChange={handleOnChange}
          />
        </Form>
      </Formik>
    </div>
  )
}

export default withRouter(Filters)
