"use server"

import { cookies } from 'next/headers';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export async function createTopic(topic, user){

    console.log('topic called', topic)
    console.log('user called', user)

    await prisma.topic.create({
        data: {
          topic: topic,
          userId: user?.id
        },
      });
    
      const topics = await prisma.topic.findMany();
      console.log(topics);
}