import React from 'react'

const AddSocials = () => {
    return (
        <div>
            <div className='w-full h-[100vh]'>
                <div className=' flex flex-col items-center justify-center'>
                    <h2 className='text-3xl mt-4 font-bold py-3'>Add your <span className='text-green-300'>Socials</span> below</h2>
                    <p>leave blank if you don't have an account</p>
                </div>

                <div className='py-12 px-56 mt-10 w-3/4 mx-auto bg-gray-800 rounded-md shadow-lg'>
                    <div className=''>
                        <h3 className='py-3 text-yellow-100 uppercase'>Instagram</h3>
                        <input className='w-full focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>
                    <div className=''>
                        <h3 className='py-3 text-yellow-100 uppercase'>tiktok</h3>
                        <input className='w-full focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>
                    <div className=''>
                        <h3 className='py-3 text-yellow-100 uppercase'>twitter</h3>
                        <input className='w-full focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>
                    <div className=''>
                        <h3 className='py-3 text-yellow-100 uppercase'>youtube</h3>
                        <input className='w-full focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>
                    <div className=''>
                        <h3 className='py-3 text-yellow-100 uppercase'>facebook</h3>
                        <input className='w-full focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>
                    <div className=''>
                        <h3 className='py-3 text-yellow-100 uppercase'>linkedin</h3>
                        <input className='w-full focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>
                    <div className=''>
                        <h3 className='py-3 text-yellow-100 uppercase'>github</h3>
                        <input className='w-full focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSocials
