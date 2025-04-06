import React from 'react'

export default function Card({ image, title, description, link }) {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <img className="w-full h-56 object-cover" src={image} alt={title} />
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl text-gray-900">{title}</h2>
                <p className="text-gray-700 text-base mt-2">{description}</p>
            </div>
            <div className="px-6 py-4">
                <a
                    href={link}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
                >
                    Learn More
                </a>
            </div>
        </div>
    )
}
