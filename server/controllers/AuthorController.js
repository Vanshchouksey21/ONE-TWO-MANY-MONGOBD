const AuthorModel = require('../models/AuthorModel');
const BookModel = require('../models/BookModel');



const insertauthor = async (req, res) => {
  try {
    const { name, age } = req.body;

    const Author = await AuthorModel.create({
      name,
      age
    });

    res.send({
      status: 200,
      message: "Author inserted successfully",
      data: Author
    });

  } catch (error) {
    console.error('Error inserting author:', error);
    res.status(500).send({
      status: 500,
      message: 'Error inserting author',
      error: error.message
    });
  }
};


const getAllAuthors = async (req, res) => {
    try {
      const authors = await AuthorModel.find().populate('bookid');
      res.status(200).send(authors);
    } catch (error) {
      console.error('Error fetching authors:', error);
      res.status(500).send({ message: 'Error fetching authors' });
    }
  };
  const insertBook = async (req, res) => {
    try {
      const { authorId, bookName, bookPrice } = req.body;
  
      // First create the book
      const Book = await BookModel.create({
        bookName,
        bookPrice
      });
  
      // Then update the author to push the new book id
      await AuthorModel.findByIdAndUpdate(authorId, {
        $push: { bookid: Book._id }
      });
  
      res.status(200).send({
        status: 200,
        message: "Book inserted and linked to author successfully",
        data: Book
      });
    } catch (error) {
      console.error('Error inserting book:', error);
      res.status(500).send({ message: 'Error inserting book', error: error.message });
    }
  };
  
  

module.exports = { insertauthor , getAllAuthors , insertBook };
