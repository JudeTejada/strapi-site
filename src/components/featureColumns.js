import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"


import Container from './container';

const FeaturesContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(286.75px, 1fr));flex-direction:row;
flex-wrap:wrap;
gap:3em;
margin-top:4em;
`



const FeatureColumns = () => (

  <StaticQuery
    query={graphql`
    {
      strapiPages {
        contentSections {
          features {
            description
            title
            icon {
              publicURL
            }
          }
        }
      }
    }
    
    `}
    render={data => {
   
      const{features} = data.strapiPages.contentSections[2];
      return (
        <Container>
            <FeaturesContainer>
          {features.map(
            ({ title, description, icon:{publicURL} }) => (
              <div>
                <img src={publicURL} alt=""/>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            )
          )}
        </FeaturesContainer>
        </Container>
      
      )
    }}
  />
)

export default FeatureColumns

