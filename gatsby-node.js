
const path = require('path');
const { default: slugify } = require('slugify');

exports.createPages = async ({graphql , actions})=>{
 const {createPage} = actions

 const result = await  graphql(`
 query GetRecipes {
    allContentfulRecepies {
      nodes {
        content {
          tags
        } 
      }
    }
  } 
 `)
// console.log(result);

 result.data.allContentfulRecepies.nodes.forEach(recipe => {
     recipe.content.tags.forEach(tag => {
         const tagSlug = slugify(tag , {lower:true});
        createPage({
             path : `/${tagSlug}`,
             component : path.resolve(`src/templates/tags-template.js`),
             context :{
                 tag : tag
             }
         })
     })
 
 });
}