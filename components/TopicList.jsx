import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'

import { HiPencilAlt } from 'react-icons/hi'

const getTopics = async () => {
    try {
        const res = await fetch("http:localhost:3000/api/Topics", {
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error("Failed to fetch topics.")
        }

        return res.json();
    }
    catch (error) {
        console.log('found fetch error' + error)
    }
}

async function TopicList() {

    const { topics } = await getTopics();

    return (
        <div>
            {
                topics.map((item) => {
                    return (
                        <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
                            <div>
                                <h2 className='font-bold text-2xl'>{item.title}</h2>
                                <div>{item.description}</div>
                            </div>
                            <div>
                                <RemoveBtn id={item._id} />
                                <Link href={`/editTopic/${item._id}`}><HiPencilAlt size={24} /></Link>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default TopicList
