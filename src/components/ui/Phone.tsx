import { cn } from '@/lib/utils'
import React, { HTMLProps } from 'react'

interface PhoneProps extends HTMLProps<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
}

const Phone = ({ className, imgSrc, dark, ...props }: PhoneProps) => {
  return (
    <div 
      className={cn("relative pointer-events-none z-50 overflow-hidden", className)} 
      {...props}
    >
      {/* Here you can add the image and other content if needed */}
      <img src={dark ? "/Desktop-2.png" :'/Desktop-2.png'} alt="Phone" className="pointer-events-none z-50 select-none" />
      <div className='absolute -z-10 inset-0'>
        <img className='object-cover' 
        src={imgSrc}
        alt='overlaying phone image'
        />
      </div>
    </div>
  )
}

export default Phone
