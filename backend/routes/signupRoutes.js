const express = require('express');
const { createSignup } = require('../controllers/signupController');
const router = express.Router();

router.post('/', createSignup);
