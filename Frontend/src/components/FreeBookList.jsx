import React from "react";
import { useState,useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from 'axios';

function FreeBookList() {

   const [book, setBook] = useState([]);
   useEffect(() => {
     const getBook = async () => {
       try {
         const res = await axios.get("http://localhost:4001/book");
         setBook(res.data);
       } catch (err) {
         console.log(err);
       }
     };
     getBook();
   }, []);
  
  const Freebook = book.filter((book) => book.price === 0);
  console.log(Freebook);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1204,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} right-0 transform translate-x-4`}
        
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} left-0 transform -translate-x-4`}
        
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16 md:mt-24">
        <h1 className="font-bold text-xl pb-2">Free e-Books</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          dignissimos hic tempora iste recusandae accusamus quam tenetur
          commodi, voluptatem ex rerum, officiis perferendis error minus in
          amet, ullam quos earum aliquam vero consequuntur sapiente?
        </p>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <Slider {...settings}>
          {Freebook.map((item) => (
            <div
              key={item.id}
              className="p-2 dark:bg-gray-800 dark:text-white rounded-md"
            >
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default FreeBookList;
