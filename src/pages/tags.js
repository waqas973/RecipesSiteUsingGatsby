import { Link ,graphql } from 'gatsby';
import React from 'react'
import slugify from 'slugify';
import Layout from '../Components/Layout';
import SEO from '../Components/SEO';
import setupTags from '../utilis/setupTags';

const Tags = ({data}) => {
     const newTags = setupTags(data.allContentfulRecepies.nodes);
    return (
        <Layout>  
          <SEO title='tags' />        
          <main className='page'>
              <section className='tags-page'>
              {
                   newTags.map((tag,index)=>{
                      const [text,value] = tag; 
                      const slug  = slugify(text,{lower:true});
                      return <Link to={`/${slug}`} key={index} className='tag' ><h5>{text}</h5>
                      <p>{value} recipe</p>
                      
                      </Link>  
                   })
               }
              </section>
          </main>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulRecepies {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;
export default Tags;
