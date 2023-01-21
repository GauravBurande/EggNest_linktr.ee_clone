import React from 'react'

const LayAnEgg = () => {
    return (
        <div>
            <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
                <div className=''>
                    <h2 className='text-3xl font-bold py-3'>Lay your <span className='text-green-300'>Egg</span> below</h2>
                </div>

                <div className='py-12 px-12 mt-5 bg-gray-800 rounded-md shadow-lg'>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='py-3 font-mono tracking-widest text-yellow-100 uppercase'>title</h3>
                        <input className='w-[50vw] text-center focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                        <h3 className='py-3 font-mono tracking-widest text-yellow-100 uppercase'>link</h3>
                        <input className='w-[50vw] text-center focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayAnEgg