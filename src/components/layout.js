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
  else if (location.pathname === "/farms") {
    activeIndex = 1
  }
  else if (location.pathname === "/investments") {
    activeIndex = 2
  }
  else if (location.pathname === "/wallet") {
    activeIndex = 3
  }
  else if (location.pathname === "/analysis") {
    activeIndex = 4
  }
  else if (location.pathname === "/history") {
    activeIndex = 5
  }
  else if (location.pathname === "/products") {
    activeIndex = 6
  }
  else if (location.pathname === "/test") {
    activeIndex = 7
  }
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
        {/* <SidebarRight/> */}
        {/* <SidebarFarm/> */}
      </Layout>
    </ThemeProvider>
  )
}

export default Layout
