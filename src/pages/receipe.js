import React from 'react'
import Allrecepies from '../Components/Allrecepies';
import Layout from '../Components/Layout';
import SEO from '../Components/SEO';

const Receipe = () => {
    return (
        <Layout>
            <SEO title='recipe' />
          <main className='page'>
              <Allrecepies />
          </main>
        </Layout>
    )
}

export default Receipe;
