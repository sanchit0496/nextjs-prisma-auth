import CreatePost from '@/components/CreatePost/CreatePost'
import PostList from '@/components/PostList/PostList';
import { cookies } from 'next/headers';
import React from 'react'

const Topic = async ({params}) => {
  const {topic} = await params
  
  const userSession = cookies().get("userSession")?.value;
  const user = JSON.parse(userSession);

  return (
    <>
      <div>{`Topic ${topic[0]}`}</div>
      <CreatePost topic = {topic[0]} user = {user.id} />
      <PostList topic = {topic[0]} />
    </>
  )
}

export default Topic