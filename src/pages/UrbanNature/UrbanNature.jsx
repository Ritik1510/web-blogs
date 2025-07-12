import React from 'react'
import BlogStructure from '../../components/ui/blogStructure';
import postData from '../../components/postsData/monsoonTerracePlants.json';

function UrbanNature() {
  return (
    <>
    <BlogStructure data={postData}/>
    </>
  )
}

export default UrbanNature