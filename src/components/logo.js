import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const LogoImage = styled.img`
  height: 2rem;
  margin: 0;
`
export default function Logo() {
  return (
    <StaticQuery
      query={graphql`
        query {
          strapiGlobal {
            footer {
              logo {
                publicURL
              }
            }
          }
        }
      `}
      render={data => {
        return <h1>My Logo</h1>
      }}
    />
  )
}
