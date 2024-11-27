import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import CustomToast from "../components/CustomToast";

export const MyContext = createContext();

const MyProvider = ({ isRoute = false, children }) => {
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  // Allowed file types (Python and Java)
  const allowedExtensions = [".py", ".java"];

  // Handle file input change
  const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const fileExtension = selectedFile?.name.split(".").pop().toLowerCase();

    // Check if file has a valid extension
    if (allowedExtensions.includes(`.${fileExtension}`)) {
      setFile(selectedFile);
      setMessage("");
    } else {
      setFile(null);
      setMessage("⚠️ Only .py and .java files are allowed! ⚠️");
      message && toast(<CustomToast message={message} />);
    }
  };

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setMessage("⚠️ Please select a valid file! ⚠️");
      message && toast(<CustomToast message={message} />);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Send the file to the Python backend

      const result = await fetch("http://127.0.0.1:5000/upload", {
        method: 'POST',
        body: formData
      })

      // Adjust based on the backend response
      if (result.ok) {
        const data = await result.json()
        setLink(data.message);
        console.log(link)
        setMessage("ℹ️ File uploaded successfully! ℹ️");
        message && toast(<CustomToast message={message} />);
        window.location.href = "/download"
      } else {
        console.error("Error:", result.statusText);
      }      
    } catch (error) {
      setMessage("⚠️ File upload failed! ⚠️");
      message && toast(<CustomToast message={message} />);
      console.error("Error uploading file:", error);
    }
  };

  const formHandler = () => {
    return (
      <div className="container center-section">
        <h2>Upload File</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="file"
              className="form-control"
              onChange={onFileChange}
              required
              autoFocus
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Upload
          </button>
        </form>
      </div>
    );
  }

  return (
    <MyContext.Provider value={{ link }}>
      {isRoute ? formHandler() : children}
    </MyContext.Provider>
  );
};

export default MyProvider;
