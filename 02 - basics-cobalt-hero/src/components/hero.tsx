import React from 'react'

export const Hero = () => {
    return (
        <div className='my-40 flex w-full flex-col items-center justify-center'>
            <h1 className="max-w-2xl bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl font-bold tracking-tight text-white leading-tight">
                Unleash the power of intuitive finance
            </h1>
            <p className='max-w-3xl text-center mt-10 text-xl text-neutral-400 selection:bg-white' >
                Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a pro. Simple. Intuitive. And never boring.
            </p>
            <div className="mt-12 flex justify-center w-full max-w-lg ">
                <input 
                type="text"
                className='flex-1 mr-4 rounded-xl border border-neutral-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-500'
                placeholder='Enter your email'
                />
                <button className="relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white">
                    <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-sky-600 to-transparent"></div>
                    Join waitlist
                </button>
            </div>
        </div>
    )
}