import PropTypes from "prop-types";
export default function GreenButton({ text }) {
  return (
    <div className="gButton mt-6 mb-6 border-round-md w-12rem h-4rem bg-primary text-white flex align-items-center justify-content-center ">
      {text}
    </div>
  );
}

GreenButton.propTypes = {
  text: PropTypes.string.isRequired,
};
