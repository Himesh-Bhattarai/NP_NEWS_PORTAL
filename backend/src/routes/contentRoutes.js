// routes/contentRoutes.js
const express = require('express');
const router = express.Router();
const {
    createContent,
    getAllContent,
    getContentById,
    getReporterContent,
    updateContent,
    deleteContent
} = require('../controllers/contentController');
const { auth, isReporter } = require('../middleware/auth');
const validateContent = require('../middleware/validateContent');
const upload = require('../utils/fileUpload');


//Public routes
router.get('/', getAllContent);
router.get('/:id', getContentById)

router.use(auth, isReporter);

router.post(
    '/',
    upload.array('media', 5),
    validateContent,
    createContent
);

router.get('/my-content', getReporterContent);
router.put('/:id', validateContent, updateContent);
router.delete('/:id', deleteContent);

module.exports = router;