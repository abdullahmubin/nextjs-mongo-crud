import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopicById = async (id) => {
    try {
        const res = await fetch("http://localhost:3000/api/Topics/" + id, {
            cache: "no-store"
        })

        if (!res.ok) {
            throw new Error("Failed to fetch topic.");
        }

        return res.json();
    }
    catch (error) { console.log('failed to connect APIs') }
}

async function EditTopic({ params }) {
    const { id } = params;

    const topic = await getTopicById(id);
    const { title, description } = topic.topic;

    console.log('topic')
    console.log(topic)
    console.log(title);
    console.log(description)
    return (
        <div>
            <EditTopicForm id={id} title={title} description={description} />
        </div>
    )
}

export default EditTopic
