import { useRouter } from 'next/router'
import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const LayAnEgg = () => {

    const emptyInputs = { title: "", link: "" }
    const [linkDetails, setLinkDetails] = useState(emptyInputs)

    const router = useRouter()

    const handleOnChange = (e: any) => {
        setLinkDetails({ ...linkDetails, [e.target.name]: e.target.value })
        console.log(linkDetails)
    }

    const context: any = useContext(UserContext)
    const { userData, setUserData } = context

    const handleAdd = () => {
        if (userData.links === "lay an egg") {
            setUserData({ ...userData, links: [linkDetails] })
        } else {
            setUserData({ ...userData, links: [...userData.links, linkDetails] })
        }
        console.log({ ...userData, links: linkDetails })
        router.push('/eggnest')
    }

    return (
        <div>
            <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
                <div className=''>
                    <h2 className='text-3xl font-bold py-3'>Lay your <span className='text-green-300'>Egg</span> below</h2>
                </div>

                <div className='py-12 px-12 mt-5 bg-gray-800 rounded-md shadow-lg'>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='py-3 font-mono tracking-widest font-bold text-yellow-100 uppercase'>title</h3>
                        <input name='title' onChange={handleOnChange} value={linkDetails.title} className='w-[50vw] text-center focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                        <h3 className='py-3 font-mono tracking-widest font-bold text-yellow-100 uppercase'>link</h3>
                        <input name='link' onChange={handleOnChange} value={linkDetails.link} className='w-[50vw] text-center focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>

                    <div className='mt-10 py-4 w-[50vw]'>
                        <button onClick={handleAdd} className='bg-gray-900 py-4 px-6 capitalize rounded-full font-bold hover:text-green-300 hover:scale-105 transition-transform duration-200 hover:underline hover:decoration-yellow-100'>add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayAnEgg