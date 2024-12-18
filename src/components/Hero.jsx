import React from 'react'
import BgImage from '../assets/bg-slate.png'

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

const Hero = () => {
  return (
    <main style={bgImage}>
        <section className='min-h-[750px] w-full'>
            <div className="container">
                {/* Navabar section */}
                {/* Hero section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
                    {/* Text Content Section */}
                    <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                        <h1 className='text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
                        <div className='relative'>
                            <div className='relative z-10 space-y-4'>
                                <h1 className='text-2xl'>Black Lifestyle Lovers,</h1>
                                <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur, cumque eos neque dolorem architecto deserunt quis voluptatibus in quisquam quia ducimus</h1>
                            </div>
                        </div>
                        <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
                    </div>
                    {/* Hero Image Section */}
                    {/* Third div section */}
                </div>
            </div>
        </section>
    </main>
  )
}

export default Hero