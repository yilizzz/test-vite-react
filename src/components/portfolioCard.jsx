import PropTypes from "prop-types";
export default function PortfolioCard({ address, title }) {
  return (
    <div className="pCard flex flex-column justify-content-center align-items-start w-5 pl-5 border-round-md">
      <img className="w-full" src={address} />
      <div className="w-full flex justify-content-between align-items-center mt-5 mb-3">
        <h3>{title}</h3>
        <span className="text-primary">View Details</span>
      </div>
    </div>
  );
}

PortfolioCard.propTypes = {
  address: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
