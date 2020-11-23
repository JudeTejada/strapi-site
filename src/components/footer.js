import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Container from "./container"

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:2em 0;
  flex-wrap:wrap;
`
const LogoImage = styled.img`
  width: 100%;
  height: 2rem;
`

const FooterColumns = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-wrap:wrap;
`



const ColumnTitle = styled.h4`
letter-spacing:0.25em;
text-transform:uppercase;
font-weight:bold;
font-size:0.9em;
margin-bottom:0.8em;
`

const ColumnLink =styled.a`
margin-bottom:0.3em;
font-size: 0.75em;
display:block;
font-family:Segoe UI;
color:#555;

&:hover{
    color:#333;
}


`

const Footer = () => (
  <StaticQuery
    query={graphql`
      {
        strapiGlobal {
          footer {
            logo {
              publicURL
            }
            smallText
            columns {
              title
              links {
                text
                url
              }
            }
          }
        }
      }
    `}
    render={data => {
     
      const {
        columns,
        logo: { publicURL },
        smallText,
      } = data.strapiGlobal.footer
  

      return (
        <Container>
          <FooterContainer>
            <div>
              <LogoImage src={publicURL} alt="logo" />
            </div>

            <FooterColumns>
              {columns.map(({ links, title }) => (
                <div>
                  <ColumnTitle>{title}</ColumnTitle>
                  <ul>
                    {links.map(({ text, url }) => (
                      <li>
                        <ColumnLink href={url}>{text}</ColumnLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </FooterColumns>
          </FooterContainer>
        </Container>
      )
    }}
  />
)

export default Footer
