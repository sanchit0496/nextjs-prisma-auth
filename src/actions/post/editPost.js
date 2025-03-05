"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function editTopic(id, newComment) {
    try {
        await prisma.post.update({ 
            where: { id },
            data: { comment: newComment },
        });
        console.log(`Topic ${id} updated to ${newComment}`);
    } catch (error) {
        console.error("Error updating topic:", error);
    }
}