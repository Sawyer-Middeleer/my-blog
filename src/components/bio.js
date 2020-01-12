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
        marginBottom: rhythm(2.5),
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
        Created by <strong>{author},</strong> who is a product manager, amateur chef and
        Master of Public Policy student at the University of Chicago.
        <li>
        {` `}
        <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
          Connect with him on LinkedIn
        </a>
        </li>
        <li>
        {` `}
        <p>
          Email him at sawyerm[at]uchicago.edu
        </p>
        </li>
        <li>
        {` `}
        <a href={`https://github.com/${social.github}`}>
          And check out his Github
        </a>
        </li>
      </p>
    </div>
  )
}

export default Bio
