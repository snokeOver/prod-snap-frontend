import MobileCard from "../shared/cards/MobileCard";
import CardSkeleton from "../shared/CardSkeleton";
import Container from "../shared/Container";
import PageTitle from "../shared/PageTitle";

const FeaturedPhone = ({ featuredMobiles, isPending, error }) => {
  return (
    <Container>
      <PageTitle
        title="Featured Mobile"
        subTitle="Dive into the latest mobile phone everyone is talking about"
      />
      {/* Will make a custom error message component*/}
      {error && <div>Error: {error?.message}</div>}
      {isPending ? (
        <CardSkeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 group mt-2 md:mt-10">
          {featuredMobiles?.map((mobile) => (
            <MobileCard key={mobile._id} mobile={mobile} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default FeaturedPhone;
