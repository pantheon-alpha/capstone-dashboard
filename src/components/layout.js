import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "./global-styles"
import { ThemeDark, ThemeLight } from "./themes"
import Sidebar from "./sidebar"
import SidebarRight from "./sidebarRight"
import { useLocation } from "@reach/router"
import SidebarFarm from "./sidebarFarm"

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
  else if (location.pathname === "/watchlist") {
    activeIndex = 1
  }
  else if (location.pathname === "/farms") {
    activeIndex = 2
  }
  else if (location.pathname === "/funds") {
    activeIndex = 3
  }
  else if (location.pathname === "/investments") {
    activeIndex = 4
  }
  else if (location.pathname === "/reports") {
    activeIndex = 5
  }
  else if (location.pathname === "/profile") {
    activeIndex = 6
  }
  else if (location.pathname === "/test") {
    activeIndex = 7
  } // Help and Support later
  else if (location.pathname === "/settings") {
    activeIndex = 8
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
      </Layout>
    </ThemeProvider>
  )
}

export default Layout
