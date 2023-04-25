import React from 'react'
import Head from 'next/head'

import Home from '../components/templates/Home/Home'

const index = () => {

  return (
    <>
      <Head>
        <title>Amarante Group</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
        <meta
          name="title"
          content="Amarante Group"
        />
        <meta
          name="description"
          content="amarante, amarante group, amarante holding"
        />
      </Head>
      <Home />
    </>
  )
}

export default index
