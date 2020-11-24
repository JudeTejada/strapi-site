import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Container from "./container"

const FeatureRowContainer = styled.div`
  padding-top: 3em;
  display: flex;
  flex-direction: ${props => props.reverse};

  @media (max-width: 900px) {
    display: block;
  }
`

const FeatureRowImage = styled.img`
  width: 100%;
`

const FeaturedRowImageContainer = styled.div`
  flex-basis: 50%;
`
const FeaturedDescriptionRow = styled.div`
  align-self: center;
  flex-basis: 50%;
`

const FeatureRows = () => (
  <StaticQuery
    query={graphql`
    query {
      strapiPages {
        contentSections {
          features {
            media {
              publicURL
            }
            description
            title
          }
        }
      }
    }
    
    `}
    render={data => {

      const { features } = data.strapiPages.contentSections[1]

   
      return (
      <Container>
          {features.map(({ title, description, media: { publicURL } }, i) => (
            <FeatureRowContainer reverse={i % 2 === 0 ? "row-reverse" : "row"}>
              <FeaturedDescriptionRow>
                <h2>{title}</h2>
                <p>{description}</p>
              </FeaturedDescriptionRow>

              <FeaturedRowImageContainer>
                <FeatureRowImage src={publicURL} alt="" />
              </FeaturedRowImageContainer>
            </FeatureRowContainer>
          ))}
        </Container>
      )
    }}
  />
)

export default FeatureRows
