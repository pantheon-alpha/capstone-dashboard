import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "./global-styles"
import { ThemeDark, ThemeLight } from "./themes"
import Sidebar from "./sidebar"
import Hero from "./hero"
import SidebarRight from "./sidebarRight"
import { useLocation } from "@reach/router"
import { Location } from "@reach/router"

const Layout = ({ children }) => {
  
  const Layout = styled.section`
    display: flex;
    flex-direction: row;
    width: auto;
    justify-content: space-between;
  `

  const location = useLocation()
  let activeIndex = 0

  if (location.pathname === "/") {
    
    activeIndex = 0
  }
  else if (location.pathname === "/farms") {
    activeIndex = 1
  }
  else if (location.pathname === "/page-2") {
    activeIndex = 2
  }
  else if (location.pathname === "/nft") {
    activeIndex = 3
  }
  else if (location.pathname === "/governance") {
    activeIndex = 4
  }
  else if (location.pathname === "/roadmap") {
    activeIndex = 5
  }
  else if (location.pathname === "/faq") {
    activeIndex = 6
  }
  else if (location.pathname === "/contact") {
    activeIndex = 7
  }
  else {
    activeIndex = 0
  }

  return (
    <ThemeProvider theme={ThemeLight}>
      <GlobalStyles/>
      <Layout>
        <Sidebar activeIndex={activeIndex}/>
          {children}
        <SidebarRight/>
      </Layout>
    </ThemeProvider>
  )
}

export default Layout
