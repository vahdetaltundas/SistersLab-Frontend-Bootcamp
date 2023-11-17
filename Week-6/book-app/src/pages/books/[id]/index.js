import BookCard from "@/components/Card/BookCard";
import { fetchBook } from "@/pages/api/hello";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BookDetail = () => {
  const [bookDetail, setBookDetail] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const getDetail = async () => {
        const bookDet = await fetchBook(id);
        setBookDetail(bookDet);
      };
      getDetail();
    }
  }, [id]);
  console.log("Book => ", bookDetail);
  return (
    <div className="container mx-auto flex flex-row justify-center">
        <div className="basis-1/3">
        <BookCard book={bookDetail}/>
        </div>
    </div>
  );
};

export default BookDetail;
