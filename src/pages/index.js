import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"
import FeatureColumns from "../components/featureColumns"
import FeatureRows from "../components/featureRows"
import MainCallToAction from '../components/mainCallToAction';
const IndexPage = () => {
  // const data = useStaticQuery(query)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <FeatureRows />
      <FeatureColumns />
      <MainCallToAction />
      {/*  />
    
    */}
    </Layout>
  )
}

// const query = graphql`
// query  {
//   strapiPages {
//     contentSections {
//       description
//       title
//       image {
//         childImageSharp {
//           fixed {
//             src
//           }
//         }
//       }
//       Button {
//         text
//       }
//     }
//   }
// }

export default IndexPage
