import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import slugify from 'slugify';

const RecepiesList = ({recipes}) => {
    
    return (
        recipes &&
        <div className='recipes-list'>
        {  recipes.map(({title , id , image  , prepTime , cookTime})=>{
              const pathToImg = getImage(image);
              const slug = slugify(title , {lower:true});
            return  <Link key={id} to={`/${slug}`} className='recipe'>
                   <GatsbyImage image={pathToImg} alt={title} className='recipe-img' />
                   <h5>{title}</h5>
                   <p>Prep : {prepTime}min | Cook : {cookTime}min </p>
            </Link>
        }) }
        </div>
    )
}

export default RecepiesList;
