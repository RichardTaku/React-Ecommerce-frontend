import React from 'react'
import Header from '../Mainheader/Header'

const Layout = (props) => {
  return (

    <div>
    <Header />
    <main>
      {props.children}</main>
    </div>
  )
}

export default Layout