import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <>
            <header className="flex items-center justify-between">
                <Link href={''} className="text-primary font-semibold text-3xl">
                    ST PIZZA
                </Link>
                <nav className="flex items-center gap-8 text-gray-400 font-semibold">
                    <Link href={''}>
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
                    <Link href={''} className="bg-primary text-white px-6 py-2 rounded-full">
                        Login
                    </Link>
                </nav>
            </header>
        </>
    )
}

export default Header