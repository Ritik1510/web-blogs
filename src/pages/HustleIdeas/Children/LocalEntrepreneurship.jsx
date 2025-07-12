import React from "react";
import sideHustleData from "../../postsData/sideHustles.json";
import BlogStructure from "../../ui/blogStructure";
const LocalEntrepreneurship = () => {

  return (
    <>
     <BlogStructure data={sideHustleData}/> 
    </>
  );
}

export default LocalEntrepreneurship;