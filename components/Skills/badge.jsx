import React from 'react'

const Badge = ({ name }) => {
    return (
        <span className="bg-green-100 text-green-800 text-lg p-2 mx-5 my-2 font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">{name}</span>
    )
}

export default Badge