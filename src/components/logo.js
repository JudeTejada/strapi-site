import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const LogoStyle = styled.h2`
  font-size:1.6rem;
  font-weight:bold;
  text-transform:capitalize;
  margin: 0;
`
export default function Logo() {
  return(
    <LogoStyle>my logo</LogoStyle>
  )
}
