import React from 'react';
import Layout from '../Components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Link , graphql } from 'gatsby';
import RecepiesList from '../Components/RecepiesList';
import SEO from '../Components/SEO';


const About = ({data : {allContentfulRecepies : {nodes : recipes}}}) => {
    
    return (
        <Layout>
          <SEO title='about' />
          <main className='page'>
              <section className='about-page'>
                   <article>
                       <h2>Praesent scelerisque tincidunt </h2>
                       <p> Vivamus vehicula mi eu dignissim efficitur. Ut aliquet mauris id dui accumsan vulputate</p>
                       <p>Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in risus tincidunt augue fermentum lacinia. Duis id lorem leo. Donec mattis commodo sem, eu mattis libero imperdiet et. Class aptent taciti sociosqu ad litora torquent per conubia</p>
                       <Link to='/contact' className='btn'>contact</Link>
                   </article>
                
                       <StaticImage   src='../assets/images/about.jpeg' layout="fullWidth" placeholder="tracedSVG" alt='salt in Bowl'   className='about-img' as='div'     />
                   
              </section>
              <section className='featured-recipes'>
                  <h5>Look at this Awesomesource!</h5>
                  <RecepiesList recipes={recipes} />
              </section>
          </main>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulRecepies(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;
export default About;
