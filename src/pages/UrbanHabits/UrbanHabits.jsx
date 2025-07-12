import React from 'react'
import postData from '../../components/postsData/CivicPosts.json'
import BlogStructure from '../../components/ui/blogStructure';

const UrbanHabits = () => {
    return (
        <>
        <BlogStructure data={postData} />
        </>
    );
};

export default UrbanHabits;