import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { deleteBook, fetchBooks } from "./api/hello";
import BookCard from "@/components/Card/BookCard";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import CardSkeleton from "@/components/Card/CardSkeleton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [books, setBooks] = useState([]);
  const router=useRouter();
  const [loading, setLoading] = useState(true);



  const getBooks = async () => {
    try {
      const response = await fetchBooks();
      setBooks(response);
      setLoading(false);
    } catch (err) {
      console.log("Api isteği olumsuz oldu=> ", err);
      setLoading(true)
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleDelete = async (id) => {
    await deleteBook(id);
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <>
      
      <div className="md:container mx-auto ">
      <h1 className="text-center mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Books</h1>
        
      {loading ? (
        // Data yüklenirken skeleton componentini göster
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) :(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <BookCard book={book} key={book.id} detail={() => router.push(`books/${book.id}`)} remove={() => {
              handleDelete(book.id);}}/>
          ))}
        </div>
      )}
      </div>

    </>
  );
}
