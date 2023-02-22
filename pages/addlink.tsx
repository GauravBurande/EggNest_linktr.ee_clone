import { useRouter } from 'next/router'
import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import db from '../firebase';

const LayAnEgg = () => {

    const emptyInputs = { title: "", link: "" }
    const [linkDetails, setLinkDetails] = useState(emptyInputs)

    const router = useRouter()

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLinkDetails({ ...linkDetails, [e.target.name]: e.target.value })
    }

    // TODO: declare type of context
    const context: any = useContext(UserContext)
    const { userData } = context
    let dataOfUser = userData

    const handleAdd = async () => {
        if (dataOfUser.links == 0) {
            dataOfUser = { ...userData, links: [linkDetails] }
            const userRef = collection(db, "userData");
            await setDoc(doc(userRef, userData.email), dataOfUser)
        } else {
            dataOfUser = { ...userData, links: [...userData.links, linkDetails] }
            const userRef = collection(db, "userData");
            await setDoc(doc(userRef, userData.email), dataOfUser)
        }
        router.push('/eggnest')
    }

    return (
        <div>
            <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
                <div className=''>
                    <h2 className='text-3xl font-bold py-3'>Add your <span className='text-green-300'>Link</span> below</h2>
                </div>

                <div className='py-12 px-12 mt-5 bg-gray-800 rounded-md shadow-lg'>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='py-3 font-mono tracking-widest font-bold text-yellow-100 uppercase'>title</h3>
                        <input name='title' onChange={handleOnChange} value={linkDetails.title} className='w-[50vw] text-center focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                        <h3 className='py-3 font-mono tracking-widest font-bold text-yellow-100 uppercase'>link</h3>
                        <input name='link' onChange={handleOnChange} value={linkDetails.link} className='w-[50vw] text-center focus:scale-x-105 transition-transform duration-200 outline-none p-2 text-lg bg-gray-700' type="text" />
                    </div>

                    <div className='mt-10 py-4 w-[50vw]'>
                        <button onClick={handleAdd} className='bg-gray-900 py-4 px-6 capitalize rounded-full font-bold hover:text-green-300 hover:scale-105 transition-transform duration-200 hover:underline hover:decoration-yellow-100' disabled={linkDetails == emptyInputs}>add</button>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <p className='text-center absolute bottom-11'>Built with <span className='text-red-500'>❤</span> by <a href="https://twitter.com/gauravvan" className='text-green-300 hover:underline decoration-yellow-300'>@gauravvan</a></p>
            </div>
        </div>
    )
}

export default LayAnEgg
