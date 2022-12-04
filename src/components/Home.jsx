import React, { useState } from 'react' 
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import Me from '../assets/me.png'
import Typed from 'react-typed'


const Home = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 text-3xl'>Hi, my name is</p>
            <h1 className='text-5xl sm:text-7xl font-bold text-[#ccd6f6]'>Imomali</h1>
            <h1 className='text-5xl sm:text-7xl font-bold text-[#ccd6f6]'>Ramazonov</h1>
            <div className='flex'>
                <p className='text-5xl sm:text-5xl font-bold text-[#8892b0]'>I am a </p>
                <Typed
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#8892b0]'
                    strings={['Backend Developer', 'Golang Developer', 'Cyber Security Student']}
                    typeSpeed={70}
                    backSpeed={140}
                    loop
                />
            </div>

            <div>
            <Link onClick={handleClick} to='work' smooth={true} duration={700}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>                    
                </button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Home