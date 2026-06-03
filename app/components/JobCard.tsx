
"use client"

import Link from "next/link"
import { useState } from "react"

type JobCardProps = {
    id: number
    title: string
    body: string
}

export default function JobCard(
    props: JobCardProps
) {
    const [Applied, setApplied] = useState(false)

    function handleApply() {
        setApplied(true)
    }
    return (
        <div className=" rounded-lg p-4 shadow-md text-left border mx-10 flex justify-between items-center">
                <Link key={props.id} href={`/jobs/${props.id}`} className="block ">
                    <div>
                        <h2 className="text-blue-700 text-lg">{props.title}</h2>
                        <h2 className="text-gray-700">{props.body}</h2>
                    </div>
                </Link>
            <button 
                onClick={handleApply}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${Applied ? 'bg-green-500 hover:bg-green-700' : ''}`}
            >{
                Applied ? "Applied" : "Apply Now"
            }
            </button>
        </div>
    )
}