import React from "react";
import { auth } from "@/auth";
import BookList from "@/components/BookList";
import { books, borrowRecords, users } from "@/database/schema";
import { db } from "@/database/drizzle";
import { eq } from "drizzle-orm";

const Page = async () => {

    const borrowedBooks =
        await db.selectDistinctOn([borrowRecords.bookId])
            .from(books)
            .innerJoin(borrowRecords, eq(borrowRecords.bookId, books.id))

    const formattedBooks = borrowedBooks.map((record) => record.books);

    return (
        <div className="container mx-auto p-6" >
            <h2 className="text-2xl font-bold mb-4">My Borrowed Books</h2>
            <BookList title="Borrowed Books" books={formattedBooks} containerClassName="mt-8" />
        </div >
    );
};
export default Page;