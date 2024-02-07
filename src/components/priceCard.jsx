import GreenButton from "./greenButton";
import PropTypes from "prop-types";
export default function PriceCard({ price, title, list, btnText }) {
  return (
    <div className="m-4 card flex flex-column justify-content-around align-items-center w-25rem border-1 border-200 border-round-md">
      <h3 className="mt-4 text-2xl">{title}</h3>
      <span className="mt-3 text-6xl font-bold">{price}</span>
      <div className="mt-3 flex flex-column justify-content-center">
        {list.map((item, index) => (
          <span key={index}>
            <i className="pi pi-check-circle p-2"></i>
            {item}
          </span>
        ))}
      </div>
      <GreenButton text={btnText} />
    </div>
  );
}

PriceCard.propTypes = {
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  btnText: PropTypes.string.isRequired,
};
