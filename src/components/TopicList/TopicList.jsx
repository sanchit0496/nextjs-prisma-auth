import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const TopicList = async () => {
    const topics = await prisma.topic.findMany();
    console.log('topics', topics);

    const listRender = () => {
        return(
            topics.map((topic, index) => {
                return <div key={topic.id}>
                    {topic.topic}
                </div>
            })
        )
    }

    return (
        <div>
            <h1>Topic List</h1>
            {listRender()}
        </div>
    );
};

export default TopicList;
