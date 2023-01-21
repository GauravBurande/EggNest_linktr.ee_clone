import React from 'react'
import data from '../data'
import Image from 'next/image'
import { SlSocialInstagram, SlSocialYoutube, SlSocialTwitter, SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl"
import { BsPlusLg } from "react-icons/bs"
import { CgEditUnmask } from "react-icons/cg"
import { IoShareOutline } from "react-icons/io5"
import Link from 'next/link'

const EggNest = () => {
    return (
        <div className='mb-20'>
            <div id="profileCard" className="relative flex justify-center items-center flex-col">
                <div className='absolute top-14 left-0 md:left-32'>
                    <IoShareOutline className='text-2xl cursor-pointer' />
                </div>
                <div className='w-[100px] h-[100px] mt-20'>
                    <Image
                        src={data.avatar}
                        className="rounded-full object-cover w-full h-full"
                        width={100}
                        height={100}
                        alt={data.username}
                    />
                </div>

                <div>
                    <h3 className='text-xl font-bold py-5'>{data.username}</h3>
                </div>
            </div>

            <div id="socials" className="flex items-center justify-center my-5">
                {data.socials.length > 0
                    ? data.socials.map((social, index) => {
                        return (
                            <div key={index} className="flex cursor-pointer">
                                {social.title === "instagram" && <a href={social.href}><SlSocialInstagram className='text-4xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                                {social.title === "twitter" && <a href={social.href}><SlSocialTwitter className='text-4xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                                {social.title === "youtube" && <a href={social.href}><SlSocialYoutube className='text-5xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                                {social.title === "facebook" && <a href={social.href}><SlSocialFacebook className='text-4xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                                {social.title === "linkedin" && <a href={social.href}><SlSocialLinkedin className='text-4xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                                {/* change below to github icon */}
                                {social.title === "github" && <a href={social.href}><SlSocialLinkedin className='text-4xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                            </div>
                        )
                    })
                    : <div className='w-full md:w-2/3'>
                        <div className="py-4 cursor-pointer hover:text-green-300 hover:scale-x-105 font-mono tracking-widest transition-transform duration-200 w-full bg-gray-700 uppercase font-semibold shadow-md rounded-lg flex items-center justify-center my-2">
                            <Link href={"/addsocials"}>add socials</Link>
                        </div>
                    </div>}
            </div>

            <div id="links" className="flex flex-col md:w-2/3 items-center justify-center mx-auto">
                {data.links.length > 0

                    ? data.links.map((link, index) => {
                        return (
                            <div key={index} className="py-4 cursor-pointer hover:text-green-300 hover:scale-x-105 font-mono tracking-widest transition-transform duration-200 w-full bg-gray-700 uppercase font-semibold shadow-md rounded-lg flex items-center justify-center my-2">
                                <a href={link.href}>
                                    {link.title}
                                </a>
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
                            <Link href={"/layanegg"}>Lay an egg</Link>
                        </div>
                    </div>}
            </div>

            {data.socials.length > 0 && <div className='absolute flex top-28 group right-5 md:right-16'>
                <p className='text-sm bg-gray-600 px-2 py-1 h-fit my-auto mr-2 opacity-0 rounded-md group-hover:opacity-80'>edit socials</p>
                <div className='bg-gray-700 w-fit mx-auto hover:bg-green-300 hover:text-black hover:shadow-xl hover:scale-105 transition-transform duration-200 hover:rotate-180 rounded-full p-4 cursor-pointer'>
                    <Link href={"/addsocials"}>
                        <CgEditUnmask />
                    </Link>
                </div>
            </div>}

            {data.links.length > 0 && <div className='absolute flex top-10 group right-5 md:right-16'>
                <p className='text-sm bg-gray-600 px-2 py-1 h-fit my-auto mr-2 opacity-0 rounded-md group-hover:opacity-80'>lay an egg</p>
                <div className='bg-gray-700 w-fit mx-auto hover:bg-green-300 hover:text-black hover:shadow-xl hover:scale-105 transition-transform duration-200 hover:rotate-180 rounded-full p-4 cursor-pointer'>
                    <Link href={"/layanegg"}>
                        <BsPlusLg />
                    </Link>
                </div>
            </div>}
        </div>
    )
}

export default EggNest
