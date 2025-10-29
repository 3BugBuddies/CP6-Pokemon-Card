import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = ({ className = '', label = '', ...props }: InputProps) => {
  return (
    <div className="flex-1">
      {label && <label className="block text-gray-700 font-semibold mb-1" htmlFor={props.id}>{label}</label>}
      <input
        className={`w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 ${className}`}
        {...props}
      />
    </div>
  )
}

export default Input
