import React from 'react'

export default function ReviewModal({ tagline, name, content, rating }) {
  return (
    <div className="p-4 font-poly  ">
    <h2 className="text-xl font-bold mb-4 text-center">{tagline}</h2>
    <div className="flex mb-4 items-center justify-center">
      {Array.from({ length: rating }).map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 15.858l5.958 3.069-1.141-6.647L20 7.715l-6.638-.963L10 0 6.638 6.752 0 7.715l6.183 5.565L4.042 18.928 10 15.858z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
    <div className="overflow-auto max-h-64">
      <p className="pt-2 text-center">{content}</p>
    </div>
    <p className="pt-2 text-center">Reviewed by {name}</p>
  </div>
  

  )
}
