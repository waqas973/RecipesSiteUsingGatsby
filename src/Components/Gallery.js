import React from 'react'
import { useStaticQuery , graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const query = graphql`
{
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height : 200
          )
        }
        name
      }
    }
  }
`;

const Gallery = () => {
   const data = useStaticQuery(query);
   const nodes = data.allFile.nodes;
    return (
        <div>
           {
               nodes.map((item,index)=>{
                   const pathtoImg = getImage(item);
                   return <article key={index}>
                   
                   <GatsbyImage image={pathtoImg} alt={item.name} />
                   
                   </article>
               })
           }
        </div>
    )
}

export default Gallery
