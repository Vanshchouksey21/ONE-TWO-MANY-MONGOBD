import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';


const BookDetails = () => {
  const [authors, setAuthors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAuthorId, setSelectedAuthorId] = useState('');
  const [bookData, setBookData] = useState({ bookName: '', bookPrice: '' });

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

  const handleOpenModal = (authorId) => {
    setSelectedAuthorId(authorId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setBookData({ bookName: '', bookPrice: '' });
  };

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleInsertBook = async () => {
    try {
      const payload = {
        authorId: selectedAuthorId,
        bookName: bookData.bookName,
        bookPrice: bookData.bookPrice
      };

      await axios.post('http://localhost:8080/author/insertBook', payload);
      alert('Book inserted successfully!');
      handleCloseModal();
    } catch (error) {
      console.error('Error inserting book:', error);
      alert('Error inserting book!');
    }
  };

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author, index) => (
              <tr key={author._id}>
                <td>{index + 1}</td>
                <td>{author.name}</td>
                <td>{author.age}</td>
                <td>
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => handleOpenModal(author._id)}
                  >
                    Insert Book
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No authors found.</p>
      )}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Insert Book Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type="text"
                name="bookName"
                value={bookData.bookName}
                onChange={handleChange}
                placeholder="Enter book name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Book Price</Form.Label>
              <Form.Control
                type="number"
                name="bookPrice"
                value={bookData.bookPrice}
                onChange={handleChange}
                placeholder="Enter book price"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleInsertBook}>
            Insert Book
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BookDetails;
