import PropTypes from "prop-types"
import * as React from "react"
import Header from "../../organisms/header/Header"
import "./layout.scss"


  return (
    <>
      <Header siteTitle='Melodyfy' />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
