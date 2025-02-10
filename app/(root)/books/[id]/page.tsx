import { auth } from "@/auth"
import BookOverview from "@/components/BookOverview"
import { db } from "@/database/drizzle"
import { books } from "@/database/schema"
import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {

    const session = await auth()

    const id = (await params).id

    const [bookDetails] = await db.select().from(books).where(eq(books.id, id)).limit(1)

    if (!bookDetails) redirect("/404")

    return <>
        <BookOverview {...bookDetails} userId={session?.user?.id as string} />
    </>

}

export default Page