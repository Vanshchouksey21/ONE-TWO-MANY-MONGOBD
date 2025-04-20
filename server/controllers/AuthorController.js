const AuthorModel = require('../models/AuthorModel');

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
      const authors = await AuthorModel.find();
      res.status(200).send(authors);
    } catch (error) {
      console.error('Error fetching authors:', error);
      res.status(500).send({ message: 'Error fetching authors' });
    }
  };
  

module.exports = { insertauthor , getAllAuthors };
