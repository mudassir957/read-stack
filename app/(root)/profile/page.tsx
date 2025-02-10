import React from "react";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import BookList from "@/components/BookList";
import { cn } from "@/lib/utils";
import { books, borrowRecords, users } from "@/database/schema";
import { db } from "@/database/drizzle";
import { eq } from "drizzle-orm";
import { Book } from "@/type";

const Page = async ({ children }: { children: React.ReactNode }) => {

    const session = await auth()

    if (!session?.user?.id) {
        throw new Error("User ID is required");
    }

    const borrowedBooks =
        await db.select()
            .from(books)
            .innerJoin(borrowRecords, eq(borrowRecords.bookId, books.id))
            .innerJoin(users, eq(borrowRecords.userId, users.id))
            .where(eq(users.id, session?.user?.id))

    const formattedBooks = borrowedBooks.map((record) => record.books);

    return (
        <div className="container mx-auto p-6" >
            <h2 className="text-2xl font-bold mb-4">My Borrowed Books</h2>
            <BookList title="Borrowed Books" books={formattedBooks} containerClassName="mt-8" />
        </div >
    );
};
export default Page;