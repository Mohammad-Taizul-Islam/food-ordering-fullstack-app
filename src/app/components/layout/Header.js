import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <header className="flex  items-center justify-evenly gap-4 my-4">
            <nav className="flex items-center gap-6 text-gray-400 font-semibold">
                <Link href={'/'} className="text-primary font-semibold text-3xl">
                    ST PIZZA
                </Link>

                <Link href={'/'}>
                    Home
                </Link>
                <Link href={''}>
                    Menu
                </Link>
                <Link href={''}>
                    About
                </Link>
                <Link href={''}>
                    Contact
                </Link>

            </nav>

            <nav className='flex items-center gap-4 font-semibold text-gray-500 ' >
                <Link href={'/login'} >
                    Login
                </Link>
                <Link href={'/register'} className="bg-primary text-white px-6 py-2 rounded-full">
                    Register
                </Link>
            </nav>
        </header>

    )
}

export default Header