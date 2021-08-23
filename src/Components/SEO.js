import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useStaticQuery , graphql } from 'gatsby';

const query = graphql`
{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const SEO = ({title }) => {
    const {site } = useStaticQuery(query);
    return <Helmet htmlAttributes={{lang:'en'}} title={`${title} | ${site.siteMetadata.title}`}></Helmet>
}

export default SEO;
