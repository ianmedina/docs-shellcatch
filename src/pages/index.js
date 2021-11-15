import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className={styles.container}>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/inicio">
              Empezando 🚀
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <Layout
      title="Inicio"
      description="Documentación de las prácticas realizadas en la empresa Shellcatch">
      <HomepageHeader />
    </Layout>
  )
}
