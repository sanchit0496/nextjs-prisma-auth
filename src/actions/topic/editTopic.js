"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function editTopic(id, newTopic) {
    try {
        await prisma.topic.update({
            where: { id },
            data: { topic: newTopic },
        });
        console.log(`Topic ${id} updated to ${newTopic}`);
    } catch (error) {
        console.error("Error updating topic:", error);
    }
}