import Banner from "../components/home/Banner";
import FeaturedPhone from "../components/home/FeaturedPhone";
import GoToTopBtn from "../components/shared/GoToTopBtn";
import PageHelmet from "../components/shared/PageHelmet";
import { goToTop } from "../helper/goToTop";
import useGetPublicData from "../hooks/useGetPublicData";

const Home = () => {
  const {
    data: featuredMobiles,
    isPending,
    error,
  } = useGetPublicData({ apiRoute: "featured-mobile" });

  return (
    <>
      {goToTop()}
      <div className="w-full overflow-hidden">
        <PageHelmet pageName="Home" />
        <Banner />
        <div className="md:container mx-auto">
          <FeaturedPhone
            featuredMobiles={featuredMobiles}
            isPending={isPending}
            error={error}
          />

          {/* <HowItWorks />

      <FeaturedSurveySection />

      <FAQSection />  */}
        </div>
      </div>
      <GoToTopBtn />
    </>
  );
};

export default Home;
