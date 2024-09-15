export { Layout }

import React from 'react'
import { childrenPropType } from './PropTypeValues'
import logoUrl from './logo.svg'
import { PageContextProvider } from './usePageContext'
// import { Link } from './Link'
import './output.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AuthProvider from './components/AuthProvider/AuthProvider'
import { CookiesProvider } from "react-cookie";


function Layout({ pageContext, children }) {

  return (
    <React.StrictMode>
      <CookiesProvider>
        <AuthProvider>
          <PageContextProvider pageContext={pageContext}>
            <div className='p-3'>
              <Navbar />
              <div className='relative'>
                {children}
                <Footer />
              </div>
            </div>
            {/* <Frame>
          <Sidebar>
            <Logo />
            <Link href="/">Welcome</Link>
            <Link href="/about">About</Link>
            <Link href="/star-wars">Data Fetching</Link>
          </Sidebar>
          <Content>{children}</Content>
        </Frame> */}
          </PageContextProvider>
        </AuthProvider>
      </CookiesProvider>
    </React.StrictMode>
  )
}


function Frame({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto'
      }}
    >
      {children}
    </div>
  )
}

Sidebar.propTypes = {
  children: childrenPropType
}
function Sidebar({ children }) {
  return (
    <div
      id="sidebar"
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.8em',
        borderRight: '2px solid #eee'
      }}
    >
      {children}
    </div>
  )
}

Content.propTypes = {
  children: childrenPropType
}
function Content({ children }) {
  return (
    <div id="page-container">
      <div
        id="page-content"
        style={{
          padding: 20,
          paddingBottom: 50,
          minHeight: '100vh'
        }}
      >
        {children}
      </div>
    </div>
  )
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10
      }}
    >
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  )
}
