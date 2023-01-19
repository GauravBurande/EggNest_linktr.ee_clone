import React from 'react'
import data from '../data'
import Image from 'next/image'
import { SlSocialInstagram, SlSocialYoutube, SlSocialTwitter, SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl"
import { SiTiktok } from "react-icons/si"
import Link from 'next/link'

const EggNest = () => {
    return (
        <div className='mb-20'>
            <div id="profileCard" className="flex justify-center items-center flex-col">
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
                                {social.title === "tiktok" && <a href={social.href}><SiTiktok className='text-4xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                                {social.title === "twitter" && <a href={social.href}><SlSocialTwitter className='text-4xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                                {social.title === "youtube" && <a href={social.href}><SlSocialYoutube className='text-5xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                                {social.title === "facebook" && <a href={social.href}><SlSocialFacebook className='text-4xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                                {social.title === "linkedin" && <a href={social.href}><SlSocialLinkedin className='text-4xl hover:scale-105 mx-2 px-1 hover:text-green-300 transition-transform duration-200' /></a>}
                            </div>
                        )
                    })
                    : <div className='w-2/3'>
                        <div className="py-4 cursor-pointer hover:text-green-300 hover:scale-x-105 font-mono tracking-widest transition-transform duration-200 w-full bg-gray-700 uppercase font-semibold shadow-md rounded-lg flex items-center justify-center my-2">
                            <Link href={"/addsocials"}>Add Socials</Link>
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
        </div>
    )
}

export default EggNest
