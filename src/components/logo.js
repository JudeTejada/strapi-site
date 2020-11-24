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
        {
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
      
        return <LogoImage src={data.strapiGlobal.footer.logo.publicURL} />
      }}
    />
  )
}
