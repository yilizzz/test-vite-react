import PropTypes from "prop-types";
export default function SectionHeader({ title, content }) {
  return (
    <div className="flex flex-column justify-content-center align-items-center mb-6 mt-4">
      <span className="mb-5">{title}</span>
      <h2 className="text-6xl">{content}</h2>
    </div>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
