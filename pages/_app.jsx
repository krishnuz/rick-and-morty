import App from 'next/app'

import { wrapper } from '../redux/reducers/store'

class RickAndMorteyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default wrapper.withRedux(RickAndMorteyApp)
