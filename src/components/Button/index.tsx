import React from 'react'

const Button: React.FC = ({ color, children }) => {
  return (
    <button>
      {children}
    </button>
  )
}

export default Button
