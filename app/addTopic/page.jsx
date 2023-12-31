'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert('Title and description are required.');
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/Topics", {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ title, description })
            })

            if (res.ok) {
                router.push("/");
            } else {
                throw new Error("Failed to create a topic.");
            }

        }
        catch (error) {
            console.log('data save isssue. ' + error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <input onChange={(e) => setTitle(e.target.value)} value={title} className='border border-slate-500 px-8 py-2' type='text' placeholder='Topic Title' />
                <input onChange={(e) => setDescription(e.target.value)} value={description} className='border border-slate-500 px-8 py-2' type='text' placeholder='Topic Description' />

                <button type='submit' className='bg-green-600 font-bold text-white py-3 px-3 w-fit'>Add Topic</button>
            </form>
        </div>
    )
}

export default AddTopic
