const express = require('express');
const router = express.Router();
const {insertauthor , getAllAuthors} = require('../controllers/AuthorController');


router.post('/insertAuthor' , insertauthor);
router.get('/getAllAuthors', getAllAuthors);




module.exports = router;