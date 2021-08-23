import React from 'react'
import RecepiesList from './RecepiesList'
import TagsList from './TagsList';
import { useStaticQuery , graphql } from 'gatsby';

const query = graphql`
  {
    allContentfulRecepies(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;



const Allrecepies = () => {
     const data = useStaticQuery(query);
     const recepies =  data.allContentfulRecepies.nodes;
    return (
        <section className='recipes-container'>
             <TagsList recipes = {recepies} />
             <RecepiesList recipes = {recepies} />
        </section>
    )
}

export default Allrecepies;
