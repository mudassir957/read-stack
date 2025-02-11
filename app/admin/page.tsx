import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className='flex flex-col gap-4'>
      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          <Link href="/admin/books" className="hover:text-blue-600 transition">
            📚 Books
          </Link>
        </h2>
        <p className="text-gray-600">Hi, here you can see all books in the library.</p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          <Link href="/admin/users" className="hover:text-blue-600 transition">
            👥 Users
          </Link>
        </h2>
        <p className="text-gray-600">Manage and view all registered users here.</p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          <Link href="/admin/borrow-records" className="hover:text-blue-600 transition">
            📖 Borrow Books
          </Link>
        </h2>
        <p className="text-gray-600">Hi, here you can see all borrowed books in the library.</p>
      </div>
    </section>
  )
}

export default page