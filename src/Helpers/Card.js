import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Card = ({ data }) => {
  return (
    <div className="w-full md:w-1/5 h-[300px] rounded-3xl shadow-2xl border-2 border-slate-900 transition ease-in-out delay-150 hover:-translate-y-3">
      <Link to={data.route} className="space-y-5">
        <img
          src={data.image}
          alt="..."
          className="w-full h-2/3 object-contain"
        />
        <h4 className="text-center font-bold text-lg tracking-wide text-gray-900">
          {data.title}
        </h4>
        <div className="flex justify-center">
          <div className="text-2xl text-black hover:text-amber-400 hover:scale-125 duration-300">
            <BsFillArrowRightCircleFill />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
