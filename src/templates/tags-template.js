import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../Components/Layout';
import   RecepiesList from '../Components/RecepiesList';
import SEO from '../Components/SEO';
function TagTemplate({data,pageContext}) {
    const recipes = data.allContentfulRecepies.nodes;
    return (
        <Layout>
          <SEO title={pageContext.tag} />
         <main className='page'>
         <h2>{pageContext.tag}</h2>
        <div className='tag-recipes'>
            <RecepiesList recipes={recipes} />
        </div>
         </main>
        </Layout>
    )
}

export const query = graphql`
query getRecipesTags($tag : String) {
    allContentfulRecepies(
      sort: {fields: title, order: ASC}
      filter: {content: {tags: {eq: $tag}}}
    ) {
      nodes {
        title
        prepTime
        cookTime
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;
export default TagTemplate
