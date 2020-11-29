import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/sm-profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            github
            linkedin
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Created by <strong>{author},</strong> who is an urban planning nerd, amature chef and builder of e-commerce brands at <a href="www.thras.io">Thrasio</a>. He writes more frequently at <a href="http://afternormal.substack.com">http://afternormal.substack.com</a>.
        <br></br>
        <li>
        {` `}
        <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
          Connect with him on LinkedIn
        </a>
        </li>
        <li>
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          Follow him on Twitter
        </a>
        </li>
        <li>
        {` `}
        <a href={`https://github.com/${social.github}`}>
          Check out his GitHub
        </a>
        </li>
        <li>
        {` `}
          Email him at sawyerm[at]hey.com
        </li>
      </p>
    </div>
  )
}

export default Bio
