import React from 'react'
import PropTypes from 'prop-types'
import Providers from 'shared/providers'

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}
