import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center text-center vh-100 center-section">
      <FaExclamationTriangle
        className="mb-4"
        style={{ fontSize: "6rem", color: "#FFC107" }}
      />
      <h1 className="mb-4 font-weight-bold" style={{ fontSize: "6rem" }}>
        404 Not Found
      </h1>
      <p className="mb-4" style={{ fontSize: "1.25rem" }}>
        This page does not exist
      </p>
      <Link to="/" className="btn btn-primary mt-4">
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
