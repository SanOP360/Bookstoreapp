import React from "react";
import List from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-20 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Unlock Your Knowledge with Our Book Courses{" "}
            <span className="text-pink-500">Here :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            earum eveniet numquam quis, aliquam eius commodi voluptatem
            perspiciatis laudantium atque, ducimus fugiat aspernatur voluptas,
            dolorem rerum facere alias consequuntur voluptatibus? Error placeat
            aspernatur mollitia blanditiis libero magni tempora nulla vel minus,
            voluptate animi, totam iure ex earum optio expedita dolore.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {List.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
