
import React from 'react'
import { Link } from 'react-router-dom'
import MainPic from '../assets/home/main.jpg'

const WebDevelopment = () => {
    return (
        <div className='w-full'>

            <div className="bg-yellow-300 relative w-full h-40 bg-cover bg-center flex items-center justify-center flex-col bg-fixed"
                style={{ backgroundImage: `url(${MainPic}),` }}
            >
                <div className="absolute bg-white/30 w-full h-full backdrop-blur-xs"></div>
                <h1 className=" relative text-2xl font-semibold text-gray-800 z-10 text-center justify-center w-full">
                    Best Website Design And Development Services
                </h1>
                <div className=' w-full text-center md:text-right md:pr-20 z-10'>
                    <h1><Link className='text-darkSky font-semibold hover:underline' to={'/'}>Home</Link><span className='text-[gray-600]'> / Web Development</span> <span className='text-[gray-600]'>/Services</span></h1>
                </div>
            </div>



            <div className='px-20 mt-10'>
                <h1 className='text-center pb-5 text-gray-600 font-bold text-lg'>Mobile Apps Development</h1>
                <p className='text-gray-500'>Elexoft, a very well renowned web development company currently working in Pakistan. We’re bunch of guys who’re adept and skillful web designers and we are master of this field. Site advancement has been an issue and we as web Development Company working enthusiastically to come up with first-rate solution. We’ll keep on working until we get the job done. Here at Elexoft, you’ll get any web of your choice and it’s our responsibility to give you our best through our website maintenance services.</p>
            </div>

            <div className='px-20 mt-10'>
                <h1 className='text-center pb-5 text-gray-600 font-bold text-lg'>Web Development</h1>
                <p className='text-gray-500'>Elexoft Technologies is one of the leading web design and development company in Pakistan. we provide tailored end-to-end web design & development services, which are rich in creativity, functional, and highly flexible for your unique needs and preferences.

                    We offer extraordinary services in web designing to create brand’s visibility. Our work helped us gain the recognition as best web design company and managed to create space in international industry as well.

                    Our experts create most affordable web design and development services considering the size of every business. We hire the best resources to help you create flexible, user friendly, and trendsetting website in the market. Elexoft Technologies excells in web designing and development because we dive into customers’ business strategy and requirements to help create the competitive online presence.

                </p>
            </div>


            <div className='px-20 mt-10'>
                <h1 className='text-center pb-5 text-gray-600 font-bold text-lg'>Software Development</h1>
                <p className='text-gray-500'>Content management system (CMS) is considered a difficult task to maintain but we’re making it real simple by implementing our own techniques. Here our clients can survey and revise the content generated and this has done because of our web developers. By CMS web development, you can reach out to us.

                </p>
            </div>


            <div className='px-20 mt-10'>
                <h1 className='text-center pb-5 text-gray-600 font-bold text-lg'>Search Engine Optimization</h1>
                <p className='text-gray-500'>Content management system (CMS) is considered a difficult task to maintain but we’re making it real simple by implementing our own techniques. Here our clients can survey and revise the content generated and this has done because of our web developers. By CMS web development, you can reach out to us.

                </p>
            </div>

        </div>
    )
}

export default WebDevelopment
