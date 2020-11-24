import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Container from "./container"
import Logo from './logo';
const FooterContainer = styled.footer`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding:2em 0;
  flex-wrap:wrap;
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
        smallText,
      } = data.strapiGlobal.footer
  

      return (
        <Container>
          <FooterContainer>
             <Logo />
          

            <FooterColumns>
              {columns.map(({ links, title }) => (
                <div key={title}>
                  <ColumnTitle>{title}</ColumnTitle>
                  <ul>
                    {links.map(({ text, url }) => (
                      <li key={text}>
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
