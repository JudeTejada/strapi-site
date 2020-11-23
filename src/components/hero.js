import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import CustomButton from "./button"
import Container from "./container"

const HeroContainer = styled.div`
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin-bottom: 3em;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const HeroImage = styled.img`
  width: 100%;
`

const HeroTextSection = styled.div`
  align-self: center;
`


const Hero = () => {


  return (
    <StaticQuery
      query={graphql`
        {
          allStrapiPages {
            edges {
              node {
                contentSections {
                  title
                  description
                  picture {
                    publicURL
                  }
                  buttons {
                    text
                    url
                    type
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const {
          title,
          description,
          picture: { publicURL },
          buttons,
        } = data.allStrapiPages.edges[0].node.contentSections[0]

        const { text, type } = buttons[0]

        return (
          <Container>
            <HeroContainer>
              <HeroTextSection>
                <h1> {title}</h1>
                <p>{description}</p>
                <CustomButton type={type}>{text}</CustomButton>
              </HeroTextSection>

              <div>
                <HeroImage src={`${publicURL}`} alt="" />
              </div>
            </HeroContainer>
          </Container>
        )
      }}
    />
  )
}
export default Hero
