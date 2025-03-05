"use server"


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function  createPost(content, userId, topicId){
    console.log('content, userId, topicId', content, userId, topicId)

    await prisma.post.create({
        data: {
          content,
          userId,
          topicId
        },
      });
    
      const posts = await prisma.post.findMany();
      console.log(posts);

}