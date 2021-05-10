import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import SpotifyWebApi from "../../../services/spotify-web-api.js"
import { Typography } from "../../atoms/typography/Typography"
import AlbumCard from "../../molecules/albumn-card/AlbumCard.js"
import * as styles from "./listFavorites.module.scss"

const ListFavorites = () => {
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

        spotifyApi
          .getUserPlaylists()
          .then(
            function (data) {
              setAlbumsCards(data.items)
            },
            function () {
              navigate("/Login")
            }
          )
          .catch(function (e) {
            console.error(e.message) // "oh, no!"
          })
      }
    }
  }, [isBrowser])

  return (
    <>
      <Typography variant="h2">My Favorites</Typography>
      <section className= {styles.list}>
        {albumsCards.map(element => (
          <AlbumCard
            key={element.id}
            imageUrl={element.images[0].url}
            title={element.name}
            by={element.owner.display_name}
          />
        ))}
      </section>
    </>
  )
}

export default ListFavorites
