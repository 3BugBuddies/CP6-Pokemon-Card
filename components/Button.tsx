import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  children?: React.ReactNode
}

const Button = ({ loading = false, className = '', children, onClick, ...props }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (loading) {
      e.preventDefault()
      return
    }
    if (onClick) onClick(e)
  }

  return (
    <button
      className={`px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-60 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {loading ? 'Carregando...' : children}
    </button>
  )
}

export default Button
