import React from 'react'
import postData from '../postsData/CivicPosts.json'
import BlogStructure from '../ui/blogStructure';

const UrbanHabits = () => {
    return (
        <>
        <BlogStructure data={postData} />
        </>
    );
};

export default UrbanHabits;