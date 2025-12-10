"use client";


import BookNowSection from "@/components/common/booking";
import ImagePage from "@/components/common/image";


const BookPage = () => {


  return (
    <div className="max-w-[1330px] mx-auto md:px-12 lg:px-16 ">
      {/* Upper Section */}
      <div className="bg-white p-0">
      <BookNowSection/>

     
      </div>

      {/* Lower Section (unchanged) */}
      <ImagePage/>
    </div>
  );
};

export default BookPage;
