import { CircleUserRound } from 'lucide-react'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'


const Header = () => {
    return (
        <div className='max-h-20 flex items-center justify-between py-5 px-5 fixed -ml-5 top-0 md:max-w-screen-sm w-screen border-b-2 border-b-zinc-500 dark:border-b-zinc-700 rounded-2xl'>
            <Link href="/" className='text-3xl font-bold '>
                Atithi.ai
            </Link>
            <div className='flex items-center'>
                <Link href="/login">
                    <CircleUserRound className='h-7 w-7 mx-3' />
                </Link>
                <ModeToggle />
            </div>
        </div>
    )
}

export default Header