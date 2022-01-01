import React from 'react'

export default function Person({ person }) {

    const { name, gender, birth_year } = person

    return (
        <div className='card'>
            <h3>{ name }</h3>
            <p>Gender - { gender }</p>
            <p>Birth year -  { birth_year }</p>
        </div>
    )
}

