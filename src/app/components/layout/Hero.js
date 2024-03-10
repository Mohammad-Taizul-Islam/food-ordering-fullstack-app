import React from 'react'
import Image from 'next/image';
import Right from '../icons/Right';


const Hero = () => {
    return (
        <section className='hero'>
            <div className='py-12'>
                <h1 className='text-4xl font-semibold'>Everything <br /> is better <br /> with a&nbsp; <span className='text-primary'>Pizza</span></h1>
                <p className='my-4 text-gray-500 text-sm'>
                    Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
                </p>
            </div>

            <div className='relative'>
                <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt='pizza' />
            </div>
            <div className='flex gap-4 items-center mt-4'>
                <button className='flex items-center uppercase bg-primary text-white px-6 py-2 rounded-full gap-2 text-sm'>
                    order now
                    <Right />
                </button>
                <button className='flex gap-2  px-6 py-2 font-semibold text-gray-600 text-sm'>
                    Learn more
                    <Right />
                </button>
            </div>
        </section>
    )
}

export default Hero