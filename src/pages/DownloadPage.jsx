import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./UploadPage";
import "bootstrap/dist/css/bootstrap.min.css";

const DownloadPage = () => {
  const { link } = useContext(MyContext)
  console.log(link)

  return (
    <div className="container center-section">
      <h2>Download File</h2>
      <button className="btn btn-dark" type="submit">
        <Link to={link} target="_blank" style={{ "color": "snow" }}>Download</Link>
      </button>
    </div>
  );
};

export default DownloadPage;
