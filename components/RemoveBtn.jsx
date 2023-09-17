"use client"

import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

import { useRouter } from 'next/navigation';

async function RemoveBtn({ id }) {

    const router = useRouter();

    const removeTopic = async () => {
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            let res = await fetch(`http://localhost:3000/api/Topics?id=${id}`, {
                method: "DELETE",
            })

            if (res.ok) {
                router.refresh();
            }


        }
    }

    return (
        <button onClick={removeTopic} className='text-red-400'>
            <HiOutlineTrash size={24} />
        </button>
    )
}

export default RemoveBtn
