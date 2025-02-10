import React from "react";
import Link from "next/link";
import BookCover from "@/components/BookCover";
import { cn } from "@/lib/utils";
import { Book } from "@/type";

const BookCard = ({
    id,
    title,
    genre,
    coverColor,
    coverUrl,
}: Book) => (
    <li className={cn("xs:w-52 w-full")}>
        <Link
            href={`/books/${id}`}
            className={cn("w-full flex flex-col items-center")}
        >
            <BookCover coverColor={coverColor} coverImage={coverUrl} />

            <div className={cn("mt-4 xs:max-w-40 max-w-28")}>
                <p className="book-title">{title}</p>
                <p className="book-genre">{genre}</p>
            </div>
        </Link>
    </li>
);

export default BookCard;