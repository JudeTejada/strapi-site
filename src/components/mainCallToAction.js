import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import CustomButton from "./button"

const SectionContainer = styled.div`
  background: #434190;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  padding: 4em 0;
`

const SectionTitle = styled.h2`
  color: #fff;
  margin-bottom: 1.3em;
  font-size: 2.6em;

  @media (max-width: 640px) {
    font-size: 2em;
  }

  @media (max-width: 400px) {
    font-size: 1.3em;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;
`
const MainCallToAction = () => (
  <StaticQuery
    query={graphql`
      {
        strapiPages {
          contentSections {
            title
            buttons {
              url
              type
              text
            }
          }
        }
      }
    `}
    render={data => {
      const { title, buttons } = data.strapiPages.contentSections[5]

      return (
        <SectionContainer>
          <SectionTitle>{title}</SectionTitle>
                    
          <ButtonContainer>
            {buttons.map(({ text, type }) => (
              <CustomButton type={type} key={text}>
                {text}
              </CustomButton>
            ))}
          </ButtonContainer>
        </SectionContainer>
      )
    }}
  />
)

export default MainCallToAction
