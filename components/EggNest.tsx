import React from 'react'
import data from '../data'
import Image from 'next/image'
import { SlSocialInstagram, SlSocialTwitter, SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl"
import { SiTiktok } from "react-icons/si"

const EggNest = () => {
    return (
        <div>
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
                {data.socials.map((social, index) => {
                    return (
                        <div key={index} className="flex cursor-pointer">
                            {social.title === "instagram" && <a href={social.href}><SlSocialInstagram className='text-4xl mx-2 px-1' /></a>}
                            {social.title === "tiktok" && <a href={social.href}><SiTiktok className='text-4xl mx-2 px-1' /></a>}
                            {social.title === "twitter" && <a href={social.href}><SlSocialTwitter className='text-4xl mx-2 px-1' /></a>}
                            {social.title === "youtube" && <a href={social.href}><div className='w-[45px] mx-2 px-1 invert'><img src="/youtube.png" alt="youtube" /></div></a>}
                            {social.title === "facebook" && <a href={social.href}><SlSocialFacebook className='text-4xl mx-2 px-1' /></a>}
                            {social.title === "linkedin" && <a href={social.href}><SlSocialLinkedin className='text-4xl mx-2 px-1' /></a>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EggNest
