import React from 'react'
import PropTypes from 'prop-types'
import Providers from 'shared/providers'
import LtmHeader from 'shared/components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <LtmHeader />
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}
