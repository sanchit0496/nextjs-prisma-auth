"use client";


import getPosts from "@/actions/post/getPosts";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";


const PostList = ({topic}) => {
  const [posts, setPosts] = useState([]);
  const router = useRouter()

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const data = await getPosts();
      const filteredData = data.filter((item) => item.topicId === topic)
      console.log('filteredData', filteredData)
      setPosts(filteredData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div>
      <h1>Post List</h1>
      {posts.map((post) => (
        <div key={post.id}>
          {
            <div onClick={() => handleTopicClick(post)}>
              {post.content}
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default PostList;
