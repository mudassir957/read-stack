import UserList from '@/components/UserList'
import { db } from '@/database/drizzle'
import { users } from '@/database/schema'
import { User } from '@/type'
import React from 'react'

const Page = async () => {

    const userList = await db.select().from(users) as User[]
    return (
        <UserList
            title='Users'
            users={userList}
            containerClassName='mt-8' />

    )
}

export default Page