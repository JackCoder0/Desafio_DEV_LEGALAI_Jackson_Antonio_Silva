import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | ReactNode
}

export function Button({ label, ...props }: ButtonProps) {
  return (
    <button
      className="bg-primary flex h-10 cursor-pointer items-center justify-center rounded-md p-2 text-white"
      {...props}
    >
      {label}
    </button>
  )
}
