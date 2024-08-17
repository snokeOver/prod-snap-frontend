import { useParams } from "react-router-dom";
import Container from "../components/shared/Container";
import PageHelmet from "../components/shared/PageHelmet";
import useGetData from "../hooks/useGetData";
import GoToTopBtn from "../components/shared/GoToTopBtn";

import { FaLocationDot } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { IoAirplaneOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import PageSkeleton from "../components/shared/PageSkeleton";
import Ratings from "../components/shared/Ratings";

const MobileDetails = () => {
  const { id } = useParams();
  const {
    data: aMobile,
    isPending,
    error,
  } = useGetData({ apiRoute: "single-mobile", dataId: id });

  return (
    <Container>
      <PageHelmet pageName="Mobile Details" />
      <div className="md:container mx-2 bg-base-100 md:mx-auto">
        <div className="card card-compact w-full  px-4 py-4">
          {isPending ? (
            <div>
              <PageSkeleton />
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:p-8">
              <figure className="w-full mx-auto rounded-3xl ">
                <img
                  className="h-full py-4 "
                  src={aMobile?.image}
                  alt={aMobile?.image}
                />
              </figure>
              <div className="card-body text-left w-full">
                <div className="flex justify-between">
                  <h2 className="card-title text-2xl md:text-4xl font-bold text-heading-color playfair-font">
                    {aMobile?.name}
                  </h2>
                </div>
                <div>
                  <h5 className=" px-4 py-1 bg-primary text-gray-700 font-semibold rounded-xl inline-block">
                    $ {aMobile?.price.toFixed(2)}
                  </h5>
                </div>

                <div className="my-2">
                  <span className="font-extrabold text-lg mr-2">
                    Description:
                  </span>
                  <br />
                  <p className="text-justify">{aMobile?.description}</p>
                </div>
                <div className="my-2">
                  <div>
                    <span className="font-extrabold text-lg mr-2">
                      Brand:
                      <span className="text-base font-normal ml-3">
                        {aMobile?.brand}
                      </span>
                    </span>
                  </div>
                </div>

                <div>
                  <Ratings val={aMobile?.ratings} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <GoToTopBtn />
    </Container>
  );
};

export default MobileDetails;
