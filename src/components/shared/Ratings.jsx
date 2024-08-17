import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Ratings = ({ val }) => {
  return <Rating style={{ maxWidth: 180 }} value={val} readOnly />;
};

export default Ratings;
