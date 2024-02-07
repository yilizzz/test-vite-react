import PropTypes from "prop-types";
export default function SpecialCard({ icon, title, content }) {
  return (
    <div className="card flex flex-column justify-content-center align-items-start w-23rem border-1 border-200 border-round-md">
      <h3 className="m-4 flex justify-content-center align-items-start">
        <img className="mr-2" width="30" height="30" src={icon} />
        <span>{title}</span>
      </h3>
      <span className="m-4 text-left">{content}</span>
      <span className="m-4 underline hover:text-primary">Read More</span>
    </div>
  );
}

SpecialCard.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
