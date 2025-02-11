import { User } from '@/type';
import React from 'react'
import UserCard from './UserCard';

interface Props {
    title: string;
    users: User[];
    containerClassName?: string;
}

const UserList = ({ title, users, containerClassName }: Props) => {

    if (users.length === 0) return;
    return (
        <section className={containerClassName}>
            <h2 className="font-bebas-neue text-4xl">{title}</h2>

            <ul className="book-list">
                {users.map((user) => (
                    <UserCard key={user.id} {...user} />
                ))}
            </ul>
        </section>
    )
}

export default UserList