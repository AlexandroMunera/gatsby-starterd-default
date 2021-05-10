import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import SpotifyWebApi from "../../../services/spotify-web-api.js"
import { Typography } from "../../atoms/typography/Typography"
import AlbumCard from "../../molecules/albumn-card/AlbumCard.js"
import * as styles from "./listNewReleases.module.scss"

const ListNewReleases = () => {
  const [albumsCards, setAlbumsCards] = useState([])

  const isBrowser = typeof window !== "undefined"

  useEffect(() => {
    if (isBrowser) {
      if (localStorage.getItem("tokenSpotify") === null) {
        // Spotify token is required
        navigate("/Login")
      } else {
        let spotifyApi = new SpotifyWebApi()

        spotifyApi.setAccessToken(localStorage.getItem("tokenSpotify"))

        spotifyApi.getNewReleases().then(
          function (data) {
            setAlbumsCards(data.albums.items)
          },
          function () {
            navigate("/Login")
          }
        )
      }
    }
  }, [isBrowser])

  return (
    <>
      <Typography variant="h2">New Releases</Typography>
      <section className={styles.releases}>
        {albumsCards.map(element => (
          <AlbumCard
            key={element.id}
            imageUrl={element.images[0].url}
            title={element.name}
            by={element.artists[0].name}
          />
        ))}
      </section>
    </>
  )
}

export default ListNewReleases
