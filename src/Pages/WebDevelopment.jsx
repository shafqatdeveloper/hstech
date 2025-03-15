
import React from 'react'
import { Link } from 'react-router-dom'
import MainPic from '../assets/home/main.jpg'

const WebDevelopment = () => {
    return (
        <div className='w-full'>

            <div className="relative w-full h-40 flex items-center justify-center">
                <img src={MainPic} alt="bgPic" className='h-full w-full object-cover' />
                <div className="absolute bg-white/30 w-full h-full backdrop-blur-xs"></div>
                <div className='absolute flex flex-col justify-center items-center w-full'>
                    <h1 className=" text-2xl font-semibold text-gray-800 z-10 text-center justify-center w-full">
                        Best Web Design and Development Services
                    </h1>
                    <div className='w-full text-center md:text-right md:pr-20 z-10'>
                        <h1><Link className='text-darkSky font-semibold hover:underline' to={'/'}>Home</Link><span className='text-[gray-600]'> / Web Development</span> <span className='text-[gray-600]'>/Services</span></h1>
                    </div>
                </div>

            </div>



            <div className='px-20 mt-10'>
                <h1 className='text-center pb-5 text-gray-600 font-bold text-lg'>Code For The Next Level Development</h1>
                <p className='text-gray-500'>Elexoft, a very well renowned web development company currently working in Pakistan. We’re bunch of guys who’re adept and skillful web designers and we are master of this field. Site advancement has been an issue and we as web Development Company working enthusiastically to come up with first-rate solution. We’ll keep on working until we get the job done. Here at Elexoft, you’ll get any web of your choice and it’s our responsibility to give you our best through our website maintenance services.

                </p>
            </div>


            <div className='px-20 mt-10'>
                <h1 className='text-center pb-5 text-gray-600 font-bold text-lg'>Professional And Leading Web Design And Development Company</h1>
                <p className='text-gray-500'>Elexoft Technologies is one of the leading web design and development company in Pakistan. we provide tailored end-to-end web design & development services, which are rich in creativity, functional, and highly flexible for your unique needs and preferences.

                    We offer extraordinary services in web designing to create brand’s visibility. Our work helped us gain the recognition as best web design company and managed to create space in international industry as well.

                    Our experts create most affordable web design and development services considering the size of every business. We hire the best resources to help you create flexible, user friendly, and trendsetting website in the market. Elexoft Technologies excells in web designing and development because we dive into customers’ business strategy and requirements to help create the competitive online presence.</p>
            </div>

            <div className='px-20 mt-10'>
                <h1 className='text-center pb-5 text-gray-600 font-bold text-lg'>Content Management System</h1>


                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">

                    <p className="text-gray-500 md:w-2/3">
                        Content management system (CMS) is considered a difficult task to maintain, but we’re making it really simple by implementing our own techniques. Here, our clients can survey and revise the content generated, and this has been made possible by our web developers. With CMS web development, you can reach out to us.
                    </p>


                    <img src={MainPic} alt="SidePic" className="md:w-1/3 h-auto object-cover" />
                </div>

            </div>



        </div>
    )
}

export default WebDevelopment
