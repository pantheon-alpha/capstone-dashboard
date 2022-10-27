import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "./global-styles"
import { ThemeDark, ThemeLight } from "./themes"
import Sidebar from "./sidebar"
import Hero from "./hero"
import SidebarRight from "./sidebarRight"

const Layout = () => {
  

  const Layout = styled.section`
    display: flex;
  `

  return (
    <ThemeProvider theme={ThemeDark}>
      <GlobalStyles/>
      <Layout>
        <Sidebar/>
        <Hero/>
        <SidebarRight/>
      </Layout>
    </ThemeProvider>  
  )
}

export default Layout
