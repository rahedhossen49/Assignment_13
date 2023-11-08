import React, { useEffect, useState } from "react";
import AllBlog from "./AllBlog";
const myDatas = [
  {
    id: 1,
    title: "Project",
    author: "Rahed Hossen",
    date: "2023-11-05T03:36:20Z",
  }
 
];

function BlogData() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(myDatas);
  }, []);

  return (
    <>
      <AllBlog blogs={blogs} />
    </>
  );
}

export default BlogData;