import { auth } from '@/auth';
import BookList from '@/components/BookList';
import { Button } from '@/components/ui/button'
import { db } from '@/database/drizzle';
import { books } from '@/database/schema';
import { Book } from '@/type';
import { desc } from 'drizzle-orm';
import Link from 'next/link'
import React from 'react'

const Page = async () => {

    const latestBooks = (await db.select().from(books).orderBy(desc(books.createdAt))) as Book[];

    return <section className='w-full rounded-2xl bg-white p-7'>
        <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className='text-xl font-semibold'>All Books</h2>
            <Button className='bg-primary-admin'>
                <Link href="/admin/books/new" className='text-white'>
                    + Add a New Book
                </Link>
            </Button>
        </div>
        <div className='mt-7 w-full overflow-hidden'>
            <BookList
                title='Books'
                books={latestBooks}
                containerClassName='mt-8' />
        </div>
    </section>
}

export default Page