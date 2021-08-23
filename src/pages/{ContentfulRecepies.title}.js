import React from 'react';
import {graphql, Link} from 'gatsby';  
import { GatsbyImage,getImage } from 'gatsby-plugin-image';
import Layout from '../Components/Layout';
import slugify from 'slugify';
import SEO from '../Components/SEO';
const RecipeTemplate = ({data}) => {
    let {title ,cookTime , content , prepTime ,servings ,description : {description} ,image }  = data.contentfulRecepies;
    let pathToImage  = getImage(image);
    let {tags,tools,instructions,ingredients} = content;
    // console.log(content.ingredients);
    return (
        <Layout>
            <SEO title={title} />
        <main className='page'>
            <div className='recipe=page'>
                <section className='recipe-hero'>
                    <GatsbyImage image={pathToImage} alt={title} className='about-img' />
                    <article className='recipe-info'>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <div className='recipe-icons'>
                             <article>
                                 {/* <BsClockHistory />                               */}
                                 {/* <BsClock /> */}
                                 <h5>prep Time</h5>
                                 <p>{prepTime}min.</p>
                             </article>
                             <article>
                                 <h5>cook Time</h5>
                                 <p>{cookTime}min.</p>
                             </article>
                             <article>
                                 <h5>servings</h5>
                                 <p>{servings}</p>
                             </article>
                        </div>
                        <p className='recipe-tags'>
                            Tags : {
                                tags.map((tag,index) =>{
                                 const slug = slugify(tag,{lower:true});
                                 return (
                                     <Link to={`/${slug}`} key={index} >{tag}</Link>
                                 )
                                })
                            }
                        </p>
                    </article>
                </section>
                <section className='recipe-content'>
                    <article >
                        <h4>instructions</h4>
                        {
                           instructions.map((item,index)=>{
                                 return <div key={index} className='single-instruction'>
                                    <header>
                                        <p>step {index + 1}</p>
                                        <div></div>
                                    </header>
                                    <p>{item}</p>
                                 </div>
                           })
                        }
                    </article>
                    <article className='second-column'>
                        <div>
                            <h4>ingredients</h4>
                            {
                                ingredients.map((item,index)=>{
                                   return (
                                       <p key={index} className='single-ingredient'>
                                           {item}
                                       </p>
                                   )
                                })
                            }
                        </div>
                        <div>
                            <h4>Tools</h4>
                            {
                                tools.map((item,index)=>{
                                   return (
                                       <p key={index} className='single-tool'>
                                           {item}
                                       </p>
                                   )
                                })
                            }
                        </div>
                    </article>
                </section>
            </div>
        </main>
        </Layout>
    )
}

export const query = graphql`
query getSingleReceipe($title: String) {
  contentfulRecepies(title: {eq: $title}) {
    title
    cookTime
    content {
      instructions
      tags
      tools
      ingredients
    }
    description {
      description
    }
    image {
      gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
    }
    prepTime
    servings
  }
}
`;
export default RecipeTemplate
