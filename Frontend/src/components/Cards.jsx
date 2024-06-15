import React from 'react'

function Cards({item}) {
  console.log(item);
  return (
    <>
      <div className='mt-4 p-3'>
        <div className="card w-85 md:w-92  bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900  dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 cursor-pointer py-3 px-1 border">
                Rs {item.price}
              </div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 cursor-pointer py-3 px-1">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards
