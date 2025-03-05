// src/actions/topic/topics.js
"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTopics() {
    try {
        const topics = await prisma.topic.findMany();
        return topics;
    } catch (error) {
        console.error("Error fetching topics:", error);
        return [];
    }
}
