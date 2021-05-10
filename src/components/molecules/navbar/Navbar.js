import { Link, navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import menuIcon from "../../../images/menu.svg"
import SpotifyWebApi from "../../../services/spotify-web-api.js"
import { Typography } from "../../atoms/typography/Typography"
import * as styles from "./navbar.module.scss"

export default function Navbar() {
  const isBrowser = typeof window !== "undefined"

  const [user, setUser] = useState("")

  const onClickMenuIcon = () => {
    console.log("click ")
    document.getElementById("navbar").classList.toggle(styles.showNavbar)
  }

  const handlerExit = () => {
    if (isBrowser) {
      localStorage.setItem("tokenSpotify", null)
      navigate("/Login")
    }
  }

  useEffect(() => {
    console.log("use effect navbar")
    if (isBrowser) {
      let spotifyApi = new SpotifyWebApi()

      spotifyApi.setAccessToken(localStorage.getItem("tokenSpotify"))

      spotifyApi
        .getMe()
        .then(
          function (data) {
            setUser(`Hi ! ${data.display_name}`)
          },
          function () {
            navigate("/Login")
          }
        )
        .catch(function (e) {
          console.error(e.message)
        })
    }
  }, [localStorage, isBrowser])

  return (
    <>
      <button className={styles.hamburger} onClick={onClickMenuIcon}>
        <img src={menuIcon} alt="menu" />
      </button>

      <nav id="navbar" className={styles.navbar}>
        <ul>
          <li>
            <Typography variant="p">{user}</Typography>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Favorites">Favorites</Link>
          </li>
          <li>
            <a href="" onClick={handlerExit}>
              Log out
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
