import React from "react"
import { Button } from "../../atoms/button/Button"
import { Typography } from "../../atoms/typography/Typography"
import { FormField } from "../../molecules/form-field/FormField"
import * as styles from "./loginForm.module.scss"

const LoginForm = () => {
  const handleLoginSpotify = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=3208ccd9ce0244a68e4a2f1d2046fd9f&redirect_uri=http://localhost:8000/?&response_type=token&show_dialog=true`
  }

  const submit = (e) => {
    e.preventDefault()
    alert('This way to log in soon !')
  }

  return (
    <>
      <Typography variant="p">Enter with your email</Typography>

      <form className={styles.form}>
        <FormField label="Email" inputType="email" />
        <FormField label="Password" inputType="password" />
        <Button type="submit" onClick={submit}>Sing In</Button>
      </form>

      <Typography variant="p">Or use your Spotify account</Typography>

      <Button type="button" onClick={handleLoginSpotify}>Spotify</Button>
    </>
  )
}

export default LoginForm
