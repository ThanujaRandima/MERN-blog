import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
            <div>
                <img src={assets.logo} alt="logo" className='w-28 sm:w-38 -ml-5' />
                <p className='max-w-[400px] mt-2'>Blogify combines the power of AI with simple, intuitive tools to help you create, refine, and share your ideas effortlessly, grow your audience, and bring your vision to life.</p>
            </div>

            <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
                {footer_data.map((section, index) => (
                    <div key={index}>
                        <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                        <ul className='text-sm space-y-1'>
                            {section.links.map((link, i) => {
                                return(
                                    <li key={i}>
                                    <a href="#">{link}</a>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer