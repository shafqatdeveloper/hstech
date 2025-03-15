import React from 'react'
import nativeApplicationGif from '../assets/home/nativeApplication.gif'
import mobileWebAppGif from '../assets/home/mobileWebApp.gif'
import MainPic from "../assets/home/mainBgImage.jpg";
import hybridAppGif from '../assets/home/hybridApp.gif'
import { Link } from 'react-router-dom'

const AndroidApps = () => {
  return (
    <div className='mb-20'>
       <div className="relative w-full h-48 flex items-center justify-center">
              <img src={MainPic} alt="bgPic" className="h-full w-full object-cover" />
              <div className="absolute bg-white/20 w-full h-full backdrop-blur-xs"></div>
              <div className="absolute flex flex-col justify-center items-center w-full">
                <h1 className=" text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100 z-10 text-center justify-center w-full">
                Design and Development of Android Mobile Application
                </h1>
                <div className="w-full text-center md:text-right md:pr-20 z-10 mt-5">
                  <h1>
                    <Link
                      className="text-gray-100 font-semibold hover:underline"
                      to={"/"}
                    >
                      Home
                    </Link>
                    <span className="text-lg font-semibold"> / services / android-development</span>
                  </h1>
                </div>
              </div>
            </div>
      <div className='px-6 sm:px-8 md:px-20 mt-10'>
        <h1 className='text-center pb-4 text-2xl font-bold text-gray-600'>Development of Android Mobile App</h1>
        <div>
          <p className=' text-gray-500 text-justify'>When it comes to Android app development services, we are leading the industry in Pakistan. Our skilled developers and designers create user-friendly and innovative Android applications, carefully considering usability, performance, and user engagement. By understanding market needs and latest trends, our team builds cutting-edge apps that help businesses leverage Android's full potential, offering robust and contemporary Android app solutions in Pakistan.</p>
      </div>
      <div className=' mt-10'>
        <h1 className='text-center pb-4 text-2xl font-bold text-gray-600'>Delivering Exceptional Services Of Development Of Apps</h1>
       <div className='space-y-7'>
       <p className=' text-gray-500 text-justify'>Do you want to elevate your business with the best Android app development services? Without an engaging Android app, your business risks falling behind in attracting new clients. At HS Technologies, we develop user-centric Android applications that deliver seamless experiences, ensuring your customers enjoy every interaction and keep coming back for more.</p>
        <p className=' text-gray-500 text-justify'>HS Technologies is a leading team of skilled Android app developers dedicated to creating high-quality, custom mobile applications designed specifically to boost your business. Our experts deeply analyze your business objectives and strategies to deliver Android apps that significantly enhance your market presence and customer engagement. We offer comprehensive application services, including design, integration, and long-term management.</p>
        <p className=' text-gray-500 text-justify'>HS Technologies is a leading team of skilled Android app developers dedicated to creating high-quality, custom mobile applications designed specifically to boost your business. Our experts deeply analyze your business objectives and strategies to deliver Android apps that significantly enhance your market presence and customer engagement. We offer comprehensive application services, including design, integration, and long-term management.</p>
        <p className=' text-gray-500 text-justify'>Whether your requirement is a consumer-oriented Android app or an enterprise-level solution, our experienced developers handle the entire development lifecycle—from initial concept and design through deployment and post-launch support. HS Technologies excels in developing Android apps that meet your specific market demands, embody your brand identity, and propel your business growth and expansion.</p>
        <p className=' text-gray-500 text-justify'>Partner with HS Technologies to leverage the power of expert Android app development, reaching and retaining more customers than ever before.</p>
       </div>
        </div>
      </div>
      <div className='px-6 sm:px-8 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
        <div className='flex flex-col justify-center items-center gap-4 md:gap-8 border border-gray-200 rounded-md py-6 px-4'>
          <img className='w-2/4' src={nativeApplicationGif} alt="" />
          <h1 className='uppercase font-medium text-gray-600'>native application</h1>
          <p className='text-sm text-gray-500 text-justify'>A native application is a mobile application that is developed directly for an operating system (Android). This application is generally built in the language specific to the system. It can be offered in manufacturers' marketplaces (Google Play)</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 md:gap-8 border border-gray-200 rounded-md py-6 px-4'>
          <img className='w-2/4' src={mobileWebAppGif} alt="" />
          <h1 className='uppercase font-medium text-gray-600'>MOBILE WEB APPLICATION</h1>
          <p className='text-sm text-gray-500 text-justify'>The mobile web application is a thin. Long neglected in favor of the native application, it is back in force with the development of HTML5 and CSS3 standards which will improve the user experience and offer more richness and functionality on mobile</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 md:gap-8 border border-gray-200 rounded-md py-6 px-4'>
          <img className='w-2/4' src={hybridAppGif} alt="" />
          <h1 className='uppercase font-medium text-gray-600'>hybrid APPLICATION</h1>
          <p className='text-sm text-gray-500 text-justify'>A hybrid application combines the use of HTML5, JavaScript and CSS web technologies which are directly encapsulated in a native application. This allows you to benefit from all the functionalities of the mobile terminal.</p>
        </div>
      </div>
      <div className='w-full flex items-center justify-center mt-14'>
        <Link to={'/hire-us'} className='text-darkSky px-5 py-1.5 uppercase border-2 hover:bg-darkSky hover:text-white transition-all duration-300 border-darkSky rounded-sm'>get a free quote</Link>
      </div>
    </div>
  )
}

export default AndroidApps