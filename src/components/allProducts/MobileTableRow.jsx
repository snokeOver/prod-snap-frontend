import { Tooltip } from "react-tooltip";
import { TbListDetails } from "react-icons/tb";
import { formatDate } from "../../helper/helperFunction";
import { truncateDescription } from "../../helper/helperFunction";
import { useNavigate } from "react-router-dom";

const MobileTableRow = ({ singleSurvey, index }) => {
  const { name, createdAt, price, brand, _id } = singleSurvey;
  const navigate = useNavigate();

  return (
    <>
      <tr className="cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-400 hover:scale-[1.02] duration-500">
        <th>{index + 1}</th>
        <td className={`my_tooltip_${index}`}>{name}</td>
        <td>{formatDate(createdAt)}</td>
        <td>
          $ <span className="text-primary">{price.toFixed(2)}</span>
        </td>
        <td>{brand}</td>

        <td className="details_btn_tooltip">
          <button
            onClick={() => navigate(`/survey-details/${_id}`)}
            className="text-gray-500 transition-colors duration-200   hover:text-primary focus:outline-none"
          >
            <TbListDetails className="text-xl" />
          </button>
        </td>
      </tr>

      <Tooltip
        anchorSelect=".details_btn_tooltip"
        place="bottom"
        className="z-50"
        variant="info"
      >
        <p>View Details</p>
      </Tooltip>
    </>
  );
};

export default MobileTableRow;
