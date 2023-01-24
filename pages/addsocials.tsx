import { useRouter } from 'next/router'
import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const AddSocials = () => {

    const router = useRouter()

    const emptyInputs = { instagram: "https://www.instagram.com", twitter: "https://twitter.com", youtube: "https://www.youtube.com", facebook: "https://www.facebook.com", linkedin: "https://www.linkedin.com", github: "https://github.com" }
    const [socialDetails, setSocialDetails] = useState(emptyInputs)

    const handleOnChange = (e: any) => {
        setSocialDetails({ ...socialDetails, [e.target.name]: e.target.value })
    }

    const context: any = useContext(UserContext)
    const { userData, setUserData } = context

    const handleAdd = () => {
        if (socialDetails == emptyInputs) {
            setUserData({ ...userData, socials: "add socials" })
        } else {
            setUserData({ ...userData, socials: socialDetails })
        }
        console.log({ ...userData, socials: socialDetails })
        router.push('/eggnest')
    }

    return (
        <div>
            <div className='w-full h-[100vh]'>
                <div className=' flex flex-col items-center justify-center'>
                    <h2 className='text-3xl mt-4 font-bold py-3'>Add your <span className='text-green-300'>Socials</span> below</h2>
                    <p>leave blank if you don't have an account</p>
                </div>

                <div className='py-12 flex flex-col items-center justify-center mt-10 bg-gray-800 rounded-md shadow-lg'>
                    <div className=''>
                        <h3 className='py-3 font-mono tracking-widest font-bold text-yellow-100 uppercase'>Instagram</h3>
                        <input onChange={handleOnChange} value={socialDetails.instagram} name="instagram" className='w-[50vw] focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>
                    <div className=''>
                        <h3 className='py-3 font-mono tracking-widest font-bold text-yellow-100 uppercase'>twitter</h3>
                        <input onChange={handleOnChange} value={socialDetails.twitter} name="twitter" className='w-[50vw] focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>
                    <div className=''>
                        <h3 className='py-3 font-mono tracking-widest font-bold text-yellow-100 uppercase'>youtube</h3>
                        <input onChange={handleOnChange} value={socialDetails.youtube} name="youtube" className='w-[50vw] focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>
                    <div className=''>
                        <h3 className='py-3 font-mono tracking-widest font-bold text-yellow-100 uppercase'>facebook</h3>
                        <input onChange={handleOnChange} value={socialDetails.facebook} name="facebook" className='w-[50vw] focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>
                    <div className=''>
                        <h3 className='py-3 font-mono tracking-widest font-bold text-yellow-100 uppercase'>linkedin</h3>
                        <input onChange={handleOnChange} value={socialDetails.linkedin} name="linkedin" className='w-[50vw] focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>
                    <div className=''>
                        <h3 className='py-3 font-mono tracking-widest font-bold text-yellow-100 uppercase'>github</h3>
                        <input onChange={handleOnChange} value={socialDetails.github} name="github" className='w-[50vw] focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>

                    <div className='mt-10 py-4 w-[50vw]'>
                        <button onClick={handleAdd} className='bg-gray-900 py-4 px-6 capitalize rounded-full font-bold hover:text-green-300 hover:scale-105 transition-transform duration-200 hover:underline hover:decoration-yellow-100'>add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSocials
