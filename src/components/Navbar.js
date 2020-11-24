import React, { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Container from "./container"
import Logo from './logo';
const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 0;
  position: relative;
  margin-bottom:1em;
`



const NavbarList = styled.ul`
  display: flex;
  list-style-type: none;

  @media (max-width: 700px) {
    display: none;
  }
`

const NavbarMobile = styled.ul`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: scroll;
  background: #fff;
  z-index: 10;
  display: flex;

  flex-direction: column;

  display:none;
  @media(max-width:700px){
    display:block;
  }
`
const NavbarMobileSection = styled.div`
  height: 100%;
  padding: 0 1rem;
`
const NavbarLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: Segoe UI;
  &:not(:last-child) {
    margin-right: 1em;
  }

  @media (max-width: 700px) {
    display: block;
    &:not(:last-child) {
      margin: 0;
      margin-bottom: 1em;
    }
  }
`

const NavbarLinkMobile = styled(NavbarLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size:1.3em;
  &:not(:last-child) {
    margin-bottom:2.4em;
  }
`

const NavbarMobileListContainer = styled.ul`
  width: 75%;
  margin:0 auto;
  
`

const HamburgerButton = styled.button`
  display: none;
  border: none;
  background: none;

  @media (max-width: 700px) {
    display: block;
  }
`

function Navbar() {
  const hamburgerIcon = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  )
  const [toggle, setToggle] = useState(false)

  return (
    <StaticQuery
      query={graphql`
        query {
          strapiGlobal {
            navbar {
              logo
              links {
                text
                url
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Container>
            <NavbarContainer>
              <Logo />

              <NavbarList>
                {data.strapiGlobal.navbar.links.map(({ text, url }) => (
                  <NavbarLink  key={text}to={`${url}`}>{text}</NavbarLink>
                ))}
              </NavbarList>

              <HamburgerButton onClick={() => setToggle(!toggle)}>
                {hamburgerIcon}
              </HamburgerButton>
            </NavbarContainer>

            {toggle && (
              <>
               
                <NavbarMobile>
                  <NavbarMobileSection>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "1em 0 3em 0",
                      }}
                    >
                      <Logo />
                      <HamburgerButton onClick={() => setToggle(false)}>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          class="h-8 w-auto"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                        </svg>
                      </HamburgerButton>
                    </div>
                    <NavbarMobileListContainer>
                      {" "}
                      {data.strapiGlobal.navbar.links.map(({ text, url }) => (
                        <NavbarLinkMobile to={`${url}`}>
                          <span> {text}</span>

                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            class="h-8 w-auto"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                          </svg>
                        </NavbarLinkMobile>
                      ))}
                    </NavbarMobileListContainer>
                  </NavbarMobileSection>
                </NavbarMobile>
              </>
            )}
          </Container>
        )
      }}
    />
  )
}
export default Navbar
