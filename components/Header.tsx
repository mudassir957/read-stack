"use client"

import { Avatar } from '@radix-ui/react-avatar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AvatarFallback } from './ui/avatar'
import { Session } from 'next-auth'
import { getInitials } from '@/lib/utils'

const Header = ({ session }: { session: Session }) => {

    return (
        <header className="my-10 flex justify-between gap-5">
            <Link href="/"><Image src="/icons/logo.svg" alt='logo' height={40} width={40}></Image></Link>

            <ul>
                <li>
                    {session?.user ? (
                        <Link href="/profile">
                            <Avatar>
                                <AvatarFallback className='w-10 h-10'>
                                    {getInitials(session?.user?.name ?? "IN")}
                                </AvatarFallback>
                            </Avatar>
                        </Link>
                    ) : (
                        <Link href="/login">Login</Link>
                    )}
                </li>
            </ul>
        </header>
    )
}

export default Header