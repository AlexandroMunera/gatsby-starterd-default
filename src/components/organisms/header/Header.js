import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "./header.module.scss"
import { Typography } from "../../atoms/typography/Typography"
import Navbar from "../../molecules/navbar/navbar"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.header__container}>
      <Link to="/" className={styles.header__link}>
        <Typography variant="h1">{siteTitle}</Typography>
      </Link>
      <Navbar />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "Melodyfy",
}

export default Header
