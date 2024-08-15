import GoToTopBtn from "../components/shared/GoToTopBtn";
import PageHelmet from "../components/shared/PageHelmet";
import { goToTop } from "../helper/goToTop";

const Home = () => {
  return (
    <>
      {goToTop()}
      <div className="w-full overflow-hidden">
        <PageHelmet pageName="Home" />
        {/* <Banner /> */}
        <div className="md:container mx-auto">
          {/* <LatestSurveySection />

      <HowItWorks />

      <FeaturedSurveySection />

      <FAQSection /> */}
        </div>
      </div>
      <GoToTopBtn />
    </>
  );
};

export default Home;
