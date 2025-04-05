import React from "react";

const CardsWithGradient = () => {
  return (
    <>
      <div className="py-5 px-9 lg:w-1/4 md:w-1/2 rounded-lg bg-gray-900 max-w-96 h-[320px] cursor-pointer hover:shadow-colorShadow">
        <div className="flex py-2">
          <p className="text-pink-500 font-medium px-2 py-1 bg-gradient-to-r from-[#f8c7ff] from-20% to-[#d2ccff] to-75%">
            Generative AI
          </p>
        </div>
        <div className="my-2 py-3">
          <h2 className="text-white text-3xl font-semibold">
            Artificial Intelligence
          </h2>
          <div className="text-gray-400 pt-2 text-sm">
            Find curated solutions for use cases like language understanding and
            MLOps
          </div>
        </div>
        <div className="text-gray-300 mt-20 align-bottom">
          <a href="/" className="no-underline">
            <span>Read More</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default CardsWithGradient;
