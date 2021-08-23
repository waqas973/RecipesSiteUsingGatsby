import { Link } from 'gatsby';
import React from 'react'
import slugify from 'slugify';
import setupTags from '../utilis/setupTags'

const TagsList = ({recipes}) => {
    const newTags = setupTags(recipes);
    return (
        <div className='tag-container' >
           <h4>recipes</h4>
           <div className='tags-list'>
               {
                   newTags.map((tag,index)=>{
                      const [text,value] = tag; 
                      const slug  = slugify(text,{lower:true});
                      return <Link to={`/${slug}`} key={index} >{text}{`(${value})`}</Link>  
                   })
               }
           </div>
        </div >
    )
}

export default TagsList
