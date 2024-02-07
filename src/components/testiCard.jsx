import PropTypes from "prop-types";
export default function TestiCard({ title, content, numStars, client }) {
  return (
    <div className="testiCard z-1 bg-white w-25rem m-2 p-4 flex flex-column justify-content-center align-items-start border-round-sm">
      <h4 className="m-2">{title}</h4>
      <span className="m-2">{content}</span>
      <div className="m-2">
        {Array(numStars)
          .fill()
          .map((_, i) => (
            <span className="text-sm" key={i}>
              <i
                className="pi pi-star-fill"
                style={{ color: "var(--orange-300)" }}
              ></i>
            </span>
          ))}
      </div>
      <span className="m-2">{client}</span>
    </div>
  );
}

TestiCard.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  numStars: PropTypes.number.isRequired,
  client: PropTypes.string.isRequired,
};
