import React from 'react'
import BlogStructure from '../../ui/blogStructure';
import postData from "../../postsData/digitalBazarOnline.json"

function UrbanBazarOnlineServices() {
  return (
    <>
       <BlogStructure data={postData}/>
    </>
  )
}

export default UrbanBazarOnlineServices