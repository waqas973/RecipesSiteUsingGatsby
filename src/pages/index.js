
import React from "react"
import Layout from "../Components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Allrecepies from "../Components/Allrecepies";
import SEO from "../Components/SEO";




export default function Home() {
  return <Layout>
       <SEO title='home' />
        <main className='page'>
          <header className='hero'>
             <StaticImage src='../assets/images/main.jpeg' alt='hero ' layout='fullWidth' placeholder='tracedSVG'  className='hero-img' />
             <div className='hero-container'>
                <div className='hero-text'>
                   <h1>Simple recipes</h1>
                   <h4>no fluff , just recipes</h4>
                </div>
             </div>
          </header>
          <Allrecepies />
        </main>              

    </Layout>
}

