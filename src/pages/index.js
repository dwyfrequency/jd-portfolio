import React from "react"
import Lay from "../components/Lay"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default ({ data }) => (
  <Lay>
    hello from index
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner title="building solutions" info="Developer | Designer | Speaker">
        <AniLink fade to="/portfolio" className="btn-white">
          explore projects
        </AniLink>
      </Banner>
    </StyledHero>
  </Lay>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "iceBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
