import React from 'react'
import BlogStructure from '../../ui/blogStructure'
import postData from "../../postsData/monsoonTerracePlants.json"

function MonsoonTerracePlants() {
    return (
        <>
            <BlogStructure data={postData} />
        </>
    )
}

export default MonsoonTerracePlants