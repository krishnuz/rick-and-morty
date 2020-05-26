import Head from 'next/head'
import styled from '@emotion/styled'

import CharactersList from '../src/components/organisms/CharactersList'

import { fetchCharacters } from '../src/redux/actions/creators/characters'

import { CHARACTERS_LIST_ENDPOINT } from '../src/constants/endpoints'

import styles from '../src/styles/index.styles'

const Wrapper = styled('div')(styles.wrapper)
const LeftPanel = styled('div')(styles.leftPanel)
const Content = styled('div')(styles.content)

const Home = () => {
  return (
    <div>
      <Head>
        <title>Rick and Morty characters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <LeftPanel>Left Panel</LeftPanel>
        <Content>
          Content
          <CharactersList />
        </Content>
      </Wrapper>
    </div>
  )
}

Home.getInitialProps = async ({ store }) => {
  await store.dispatch(
    fetchCharacters({
      endpoint: CHARACTERS_LIST_ENDPOINT,
    })
  )
  return {}
}

export default Home
