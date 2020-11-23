import React from "react"
import styled from "styled-components"

const MainContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;

  @media (max-width: 1024px) {
    max-width: 1024px;
  }

  @media (max-width: 768px) {
    max-width: 768px;
    paddin: 0 2em;
  }

  @media (max-width: 640px) {
    max-width: 640px;
  }

  @media (max-width: 600px) {
    padding: 0 1em;
    width: 100%;
  }
`

export default function Container({ children }) {
  return <MainContainer>{children}</MainContainer>
}
