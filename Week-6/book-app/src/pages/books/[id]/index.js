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

  return (
    <div>
      <section className="py-10 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="sticky top-0 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-96">
                  <img
                    className="object-contain w-full lg:h-full"
                    src={bookDetail.imageUrl}
                    alt={bookDetail.title}
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                    {bookDetail.title}
                  </h2>
                  <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                    <span>{bookDetail.price}</span>
                    <span className="ml-3  font-normal text-gray-700  dark:text-gray-800">
                      {bookDetail.currency}
                    </span>
                  </p>
                </div>
                <div className="mb-6">
                  <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                    Description
                  </h2>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                    <div className="p-3 lg:p-5 ">
                      <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                          
                          <div className="w-full mb-4 lg:mb-0 ">
                          <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                  {bookDetail.description}
                                </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-6 " />
                <div className="flex gap-4 mb-6">
                  <a
                    href="#"
                    className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
                  >
                    Buy now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetail;
