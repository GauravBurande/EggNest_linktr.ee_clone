import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { SlSocialInstagram, SlSocialYoutube, SlSocialTwitter, SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl"
import { BsPlusLg } from "react-icons/bs"
import { CgEditUnmask } from "react-icons/cg"
import { FiGithub } from "react-icons/fi"
import { MdOutlineContentCopy } from "react-icons/md"
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '../context/UserContext'
import db, { auth } from "../firebase"
import { useRouter } from 'next/router'
import data from '../data'
import { doc, getDoc } from 'firebase/firestore/lite';



const EggNest = () => {

    const context: any = useContext(UserContext)
    const { userData, setUserData } = context;

    const userEmail = typeof window !== "undefined" && window.localStorage.getItem('userEmail')

    useEffect(() => {

        if (!userEmail) {
            router.push('/')
        } else {
            const fetchUserData = async () => {
                const docRef = doc(db, 'userData', userEmail)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    const dataOfUser = docSnap.data()
                    setUserData(dataOfUser)
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }
            fetchUserData()
        }
    }, [userEmail])


    const router = useRouter()

    const copied = () => {
        toast.success('Link copied to clipboard✨', {
            position: "bottom-left",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const handleSignOut = () => {
        auth.signOut().then(() => {
            localStorage.removeItem('userEmail')
            router.push('/');
            setUserData()
        }).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className='mb-20'>
            <ToastContainer
                position="bottom-left"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            {userData ? <div className="w-full">
                <div id="profileCard" className="relative flex justify-center items-center flex-col">
                    {/* <div className='absolute group items-center top-14 left-0 md:left-32'>
                        <p className='text-sm -translate-x-3 bg-gray-600 px-2 py-1 h-fit opacity-0 rounded-md group-hover:opacity-80'>share</p>
                        <IoShareOutline className='text-4xl cursor-pointer hover:text-green-300 hover:rotate-0 transition-transform duration-200 rotate-180 py-1' />
                    </div> */}

                    <div className='flex flex-col items-center group'>
                        <div className='w-[100px] h-[100px] mt-20'>
                            <Image
                                src={userData.avatar || data.avatar}
                                className="rounded-full object-cover w-full h-full"
                                width={100}
                                height={100}
                                alt={userData.username || data.username}
                            />
                        </div>
                        <div onClick={handleSignOut} className='mt-3 bg-gray-600 p-1 text-sm rounded cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200'>
                            <p>Sign Out</p>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-xl font-bold py-3'>@{userData.username}</h3>
                    </div>
                </div>

                <div id="socials" className="flex items-center justify-center my-5">
                    {!(userData.socials == 0)
                        ?
                        <div className="flex items-center justify-center cursor-pointer">
                            {userData.socials["instagram"] && <a href={userData.socials["instagram"]}><SlSocialInstagram className='text-4xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                            {userData.socials["twitter"] && <a href={userData.socials["twitter"]}><SlSocialTwitter className='text-4xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                            {userData.socials["youtube"] && <a href={userData.socials["youtube"]}><SlSocialYoutube className='text-5xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                            {userData.socials["facebook"] && <a href={userData.socials["facebook"]}><SlSocialFacebook className='text-4xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                            {userData.socials["linkedin"] && <a href={userData.socials["linkedin"]}><SlSocialLinkedin className='text-4xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                            {userData.socials["github"] && <a href={userData.socials["github"]}><FiGithub className='text-4xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                        </div>

                        : <div className='w-full md:w-2/3'>
                            <div className="py-4 cursor-pointer hover:text-green-300 hover:scale-x-105 font-mono tracking-widest transition-transform duration-200 w-full bg-gray-700 uppercase font-semibold shadow-md rounded-lg flex items-center justify-center my-2">
                                <Link href={"/addsocials"}>add socials</Link>
                            </div>
                        </div>}
                </div>

                <div id="links" className="flex flex-col md:w-2/3 items-center justify-center mx-auto">
                    {!(userData.links == 0)
                        ? userData.links.map((link: any, index: number) => {
                            return (
                                <div key={index} className="py-4 relative cursor-pointer hover:text-green-300 hover:scale-x-105 font-mono tracking-widest transition-transform duration-200 w-full bg-gray-700 uppercase font-semibold shadow-md rounded-lg flex items-center justify-center my-2">
                                    <a className='w-full' id='link' href={link.link}>
                                        <p className='w-8/12 text-center overflow-x-scroll mx-auto'>
                                            {link.title}
                                        </p>
                                    </a>
                                    <div onClick={() => { navigator.clipboard.writeText(link.link), copied() }} className='absolute p-2 right-4 text-xl hover:text-yellow-300'>
                                        <MdOutlineContentCopy />
                                    </div>
                                </div>
                            )
                        })


                        : <div className='w-full'>
                            <div className='flex items-center justify-center py-0'>
                                <Image
                                    src={'/emptynest.png'}
                                    alt="emptynest"
                                    height={200}
                                    width={200}
                                />
                            </div>
                            <div className='flex justify-center items-center text-sm py-3'>
                                There are no<span className='text-green-300 px-1'>Eggs</span> in your <span className='text-green-300 px-1'>Nest</span>
                            </div>
                            <div className="py-4 cursor-pointer hover:text-green-300 hover:scale-x-105 font-mono tracking-widest transition-transform duration-200 w-full bg-gray-700 uppercase font-semibold shadow-md rounded-lg flex items-center justify-center my-2">
                                <Link href={"/addlink"}>Add a Link</Link>
                            </div>
                        </div>}
                </div>

                {!(userData.socials == 0) && <div className='absolute flex top-28 group right-5 md:right-16'>
                    <p className='text-sm bg-gray-600 px-2 py-1 h-fit my-auto mr-2 opacity-0 rounded-md group-hover:opacity-80'>edit socials</p>
                    <div className='bg-gray-700 w-fit mx-auto hover:bg-green-300 hover:text-black hover:shadow-xl hover:scale-105 transition-transform duration-200 hover:rotate-180 rounded-full p-4 cursor-pointer'>
                        <Link href={"/addsocials"}>
                            <CgEditUnmask />
                        </Link>
                    </div>
                </div>}

                {!(userData.links == 0) && <div className='absolute flex top-10 group right-5 md:right-16'>
                    <p className='text-sm bg-gray-600 px-2 py-1 h-fit my-auto mr-2 opacity-0 rounded-md group-hover:opacity-80'>add a link</p>
                    <div className='bg-gray-700 w-fit mx-auto hover:bg-green-300 hover:text-black hover:shadow-xl hover:scale-105 transition-transform duration-200 hover:rotate-180 rounded-full p-4 cursor-pointer'>
                        <Link href={"/addlink"}>
                            <BsPlusLg />
                        </Link>
                    </div>
                </div>}
            </div>
                : <div className='flex items-center w-full h-[100vh] animate-pulse justify-center'>
                    <p className='font-bold text-3xl text-green-300 underline decoration-yellow-300 text-center'>please wait or reload the page</p>
                </div>
            }
        </div>
    )
}

export default EggNest
