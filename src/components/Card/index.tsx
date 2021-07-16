import React from 'react'

interface CardProps {
  title: string
  skills?: string[]
  description: string
}

const Card: React.FC<CardProps> = ({
  title,
  skills = ['React', 'Gatsby', 'Sanity', 'Shopify'],
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}) => {
  return (
    <div class='p-4 max-w-md rounded bg-green shadow-card'>
      <h3 class='text-3xl'>{title}</h3>
      <div class='italic flex flex-row my-2'>
        {skills.map((skill, index) => {
          return (
            <div class='flex flex-row' key={`project-${index}`}>
              {index >= 1 ? <p class='mx-1'>-</p> : null}
              <p>{skill}</p>
            </div>
          )
        })}
      </div>
      <div class='text-base'>
        {description}
      </div>
    </div>
  )
}

export default Card
