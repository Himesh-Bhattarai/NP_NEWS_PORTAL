const express = require('express');
const router = express.Router();
const { auth, isReporter } = require('../middleware/auth');
const upload = require('../utils/fileUpload');
const {
    createContent,
    getAllContent,
    getContentById,
    getReporterContent,
    updateContent,
    deleteContent
} = require('../controllers/contentController');
const validateContent = require('../middleware/validateContent');

// Public routes
router.get('/', getAllContent);
router.get('/:id', getContentById);

// Protected reporter routes
router.use(auth, isReporter); // Applies to all routes below

router.post('/',
    upload.array('media', 5),
    validateContent,
    createContent
);

router.get('/my/content', getReporterContent);
router.put('/:id', validateContent, updateContent);
router.delete('/:id', deleteContent);

module.exports = router;