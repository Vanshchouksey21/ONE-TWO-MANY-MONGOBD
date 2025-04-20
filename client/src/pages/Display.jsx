import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const Display = () => {
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
      <h1 className="mb-4">All Authors and their Books</h1>

      {authors.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Author Name</th>
              <th>Author Age</th>
              <th>Books (Name & Price)</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author, index) => (
              <tr key={author._id}>
                <td>{index + 1}</td>
                <td>{author.name}</td>
                <td>{author.age}</td>
                <td>
                  {author.bookid.length > 0 ? (
                    <ul style={{ paddingLeft: '20px' }}>
                      {author.bookid.map((book) => (
                        <li key={book._id}>
                          <strong>{book.bookName}</strong> - ₹{book.bookPrice}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span>No Books</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No authors found.</p>
      )}
    </div>
  );
};

export default Display;
