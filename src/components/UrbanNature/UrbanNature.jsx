import React from 'react'
import BlogStructure from '../ui/blogStructure';
import postData from '../postsData/monsoonTerracePlants.json';

function UrbanNature() {
  return (
    <>
    <BlogStructure data={postData}/>
    </>
  )
}

export default UrbanNature