import { cn } from '@/lib/utils'
import { User } from '@/type'
import React from 'react'

const UserCard = ({ id, fullName, email }: User) => (

    <li className={cn("xs:w-52 w-full")}>
        <div
            className={cn("w-full flex flex-col items-center")}
        >
            <div className={cn("mt-4 xs:max-w-40 max-w-28")}>
                <p className="user-name">{fullName}</p>
                <p className="user-email">{email}</p>
            </div>
        </div>
    </li>
)

export default UserCard