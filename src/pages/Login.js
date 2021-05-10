import React from "react"
import Seo from "../components/atoms/seo/seo"
import { Typography } from "../components/atoms/typography/Typography"
import LoginForm from "../components/organisms/login-form/LoginForm"
import * as styles from "../styles/login.module.scss"

const Login = () => {
  return (
    <section className={styles.container}>
      <div className={styles.login}>
        <Seo title="Login" />
        <Typography variant="h1">Hi there !</Typography>

        <LoginForm />
      </div>
      <div className={styles.image}></div>
    </section>
  )
}

export default Login
