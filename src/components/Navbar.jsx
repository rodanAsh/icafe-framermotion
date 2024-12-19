import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { motion } from 'framer-motion'

const Navbar = ({setIsSideMenu}) => {
  return (
    <nav className='absolute top-0 left-0 w-full pt-10 text-white z-40'>
        <div className="container">
            <div className='flex items-center justify-between'>
                {/* logo section */}
                <motion.h1 
                    initial={{opacity:0,y:-100}}
                    animate={{opacity:1,y:0}}
                    transition={{
                        type:'spring',
                        stiffness:100,
                        damping:10,
                        delay:0.2
                    }}
                    className='text-2xl font-semibold'
                >
                    <span className='text-primary'>I</span> Cafe.
                </motion.h1>

                {/* Hamburger menu section */}
                <motion.div
                onClick={() => setIsSideMenu(prev => !prev)}
                    initial={{opacity:0,y:-100}}
                    animate={{opacity:1,y:0}}
                    transition={{
                        type:'spring',
                        stiffness: 100,
                        damping: 10,
                        delay: 0.2
                    }}
                >
                    <GiHamburgerMenu className='text-3xl cursor-pointer' />
                </motion.div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar