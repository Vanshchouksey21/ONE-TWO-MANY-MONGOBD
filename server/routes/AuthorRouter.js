const express = require('express');
const router = express.Router();
const {insertauthor , getAllAuthors , insertBook} = require('../controllers/AuthorController');


router.post('/insertAuthor' , insertauthor);
router.get('/getAllAuthors', getAllAuthors);
router.post ('/insertBook', insertBook);





module.exports = router;