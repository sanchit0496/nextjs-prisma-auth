// src/actions/topic/topics.js
"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function getPosts() {
    try {
        const posts = await prisma.post.findMany();
        return posts;
    } catch (error) {
        console.error("Error fetching topics:", error);
        return [];
    }

}
