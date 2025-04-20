import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookDetails = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/author/getAllAuthors');
        console.log('Authors:', response.data);
        setAuthors(response.data);
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">ENTER BOOK DETAILS</h1>

      {authors.length > 0 ? (
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Author Name</th>
              <th>Author Age</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author, index) => (
              <tr key={author._id}>
                <td>{index + 1}</td>
                <td>{author.name}</td>
                <td>{author.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No authors found.</p>
      )}
    </div>
  );
};

export default BookDetails;
