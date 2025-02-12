import { CircleUserRound } from 'lucide-react'
import React from 'react'
import { ModeToggle } from './mode-toggle'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='w-full max-h-20 flex items-center justify-between py-5'>
            <p className='text-3xl font-bold '>
                Atithi.ai
            </p>
            <div className='flex items-center'>
                <CircleUserRound className='h-7 w-7 mx-3' />
                <ModeToggle />
            </div>
        </div>
    )
}

export default Header