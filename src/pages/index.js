import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"
import Hero from "../components/hero"

const Home = () => (
  <Layout>
    <Hero/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default Home
