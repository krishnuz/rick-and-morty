import App from 'next/app'
import styled from '@emotion/styled'

import { wrapper } from '../src/redux/store'

import '../src/styles/global.css'
import styles from '../src/styles/app.styles'

const Main = styled('main')(styles.main)
const Layout = styled('div')(styles.layout)

class RickAndMorteyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Main>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Main>
    )
  }
}

export default wrapper.withRedux(RickAndMorteyApp)
