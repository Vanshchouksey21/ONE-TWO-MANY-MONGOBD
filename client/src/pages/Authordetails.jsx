import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // ✅ Correct import

const Authordetails = () => {
  const [author, setAuthor] = useState({
    name: '',
    age: ''
  });

  const handleChange = (e) => {
    setAuthor({ ...author, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = "http://localhost:8080/Author/insertAuthor";
      const res = await axios.post(api, author);
      toast.success(`Author ${author.name} inserted successfully!`, {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "colored"
      });
      setAuthor({ name: '', age: '' });
    } catch (error) {
      toast.error("Error inserting author!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored"
      });
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Insert Author Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Author Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={author.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Author Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={author.age}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Insert Author</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Authordetails;
