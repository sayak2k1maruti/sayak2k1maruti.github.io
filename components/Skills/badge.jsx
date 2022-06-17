import React from 'react'

const Badge = ({ name }) => {
    return (
        <span className="bg-green-100 text-green-800 text-[1.2vw] p-[.5vw] mx-[1.25vw] my-[.5vw] font-semibold mr-[.5vw] px-[.7vw] py-[.4vw] rounded dark:bg-green-200 dark:text-green-900">{name}</span>
    )
}

export default Badge