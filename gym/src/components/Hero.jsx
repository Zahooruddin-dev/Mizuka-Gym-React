import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Mizuka<span className='text-blue-400'>workout</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I fully embrace the journey to become <span className='text-blue-400 font-medium'>unstoppably strong</span> and accept the challenge of transforming into a <span className='text-blue-400 font-medium'>powerful force</span>, ready to conquer every obstacle in my path.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"B E G I N"}></Button>
        </div>
    )
}
