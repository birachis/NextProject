
"use client"

import { useState } from "react"

type JobCardProps = {
    title: string
    budget: string
    company: string
    featured?: boolean
    remote?: boolean
    applied?: boolean
}

export default function JobCard(
    props: JobCardProps
) {
    const [Applied, setApplied] = useState(false)

    function handleApply() {
        setApplied(true)
    }
    return (
        <div className=" rounded-lg p-4 shadow-md text-left border mx-auto m-4 flex justify-between items-center">
            <h2 className="text-blue-700 text-lg">{props.title}</h2>
            <h2 className="text-gray-700">{props.company}</h2>
            <h2 className="text-green-500">${props.budget}</h2>
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