import { BsFillEyeFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

import {
  formatDate,
  truncateDescription,
} from "../../../helper/helperFunction";

const MobileCard = ({ mobile }) => {
  const navigate = useNavigate();
  const { _id, image, name, description, price, brand, createdAt } = mobile;

  return (
    <div className="card card-compact bg-base-100 rounded-xl border dark:border-gray-500 border-gray-300 shadow-xl hover:scale-[1.02] duration-500">
      <div className="card-body">
        <figure className="h-[300px] rounded-xl">
          <img
            className=" h-full  hover:!scale-95 duration-500"
            src={image}
            alt={image}
          />
        </figure>

        <div className=" flex-grow">
          <h2 className="card-title text-lg text-primary ">{name}</h2>
        </div>

        <div className="">
          <p className="text-justify">
            {truncateDescription(description, 15)}
            <button
              onClick={() => navigate(`/mobile-details/${_id}`)}
              className="px-2 text-sky-600 text-xs rounded-lg hover:bg-primary hover:text-gray-900"
            >
              Show Details
            </button>
          </p>
        </div>

        <div className="w-full flex items-center gap-2 text-sm mt-2">
          <h4 className="">Brand:</h4>
          <h4 className=" px-2 text-lg w-fit">{brand}</h4>
        </div>
        <div className="w-full flex items-center gap-2 text-sm ">
          <h4 className="">Price:</h4>
          <h4 className=" px-2 text-lg w-fit text-primary"> $ {price}</h4>
        </div>

        <div className="w-full flex items-center gap-2 text-sm ">
          <h4 className="">Added Date:</h4>
          <h4 className=" px-2 text-lg w-fit"> {formatDate(createdAt)}</h4>
        </div>

        <div className="card-actions justify-end mt-auto">
          <button
            onClick={() => navigate(`/mobile-details/${_id}`)}
            className="btn btn-primary btn-outline py-1 my-3 rounded-md w-full flex items-center justify-center"
          >
            <BsFillEyeFill className="text-xl" />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
