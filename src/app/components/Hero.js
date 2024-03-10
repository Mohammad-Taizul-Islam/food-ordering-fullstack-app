import React from 'react'
import Image from 'next/image';
import Right from './icons/right';


const Hero = () => {
    return (
        <section className='grid grid-cols-2'>
            <div>
                <h1 className='text-4xl font-semibold'>Everything is better with a Pizza</h1>
                <p>
                    Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
                </p>
            </div>

            <div className='relative'>
                <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt='pizza' />
            </div>
            <div className='flex gap-4 items-center mt-4'>
                <button className='flex items-center uppercase bg-primary text-white px-6 py-2 rounded-full gap-2'>
                    order now
                    <Right />
                </button>
                <button className='flex gap-2 rounded-full border  px-6 py-2 font-semibold text-gray-600'>
                    Learn more
                    <Right />
                </button>
            </div>
        </section>
    )
}

export default Hero