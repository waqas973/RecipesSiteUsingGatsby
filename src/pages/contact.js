import React from 'react';
import Layout from '../Components/Layout';
import {  graphql } from 'gatsby';
import RecepiesList from '../Components/RecepiesList';
import SEO from '../Components/SEO';

const Contact = ({data : {allContentfulRecepies : {nodes : recipes}}}) => {
    return (
        <Layout>
          <SEO title='contact' />
           <main className='page'>
               <section className='contact-page'>
                   <article className='contact-info'>
                       <h3>Want to Get  In Touch?</h3>
                        <p>Praesent scelerisque tincidunt iaculis. Aliquam vel pulvinar risus. Vivamus vehicula mi eu dignissim efficitur. Ut aliquet mauris id dui accumsan vulputate. Aliquam ac venenatis diam. Integer interdum eu libero at iaculis. </p>
                        <p>Pellentesque eleifend ex sed neque convallis</p>
                        <p>Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in risus tincidunt augue fermentum lacinia. Duis id lorem leo. Donec mattis commodo sem, eu mattis libero imperdiet et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nec feugiat tellus. </p>
                   </article>
                   <article>
                       <form className='form contact-form'>
                           <div className='form-row'>
                               <label htmlFor='name'>your name</label>
                               <input type='text' name='name' id='name' />
                           </div>
                           <div className='form-row'>
                               <label htmlFor='email'>your email</label>
                               <input type='text' name='email' id='email' />
                           </div>
                           <div className='form-row'>
                               <label htmlFor='message'>your message</label>
                                <textarea name='message' id='message' ></textarea>
                           </div>
                           <button type='button' className='btn block'>submit</button>
                       </form>
                   </article>
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

export default Contact
