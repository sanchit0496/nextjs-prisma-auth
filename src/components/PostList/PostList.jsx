"use client";


import { deletePost } from "@/actions/post/deletePost";
import getPosts from "@/actions/post/getPosts";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";


const PostList = ({topic}) => {
  const [posts, setPosts] = useState([]);
  const router = useRouter()

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      const filteredData = data.filter((item) => item.topicId === topic)
      setPosts(filteredData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDelete = async (post) => {
    try {
      await deletePost(post.id);
      fetchPosts();
    } catch (error) {
      console.error("Error deleting topics:", error);
    }
  };

  return (
    <div>
      <h1>Post List</h1>
      {posts.map((post) => (
        <div key={post.id}>
          {
            <div>
              {post.content}
              <button onClick={() => handleDelete(post)}>Delete</button>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default PostList;
