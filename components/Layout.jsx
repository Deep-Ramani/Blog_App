import React, { Children } from 'react'
import Header from './Header'

// type BoxProps = {
//   children: React.ReactChild;
// };


const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout;
