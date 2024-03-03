const express = require('express');
const { createMember } = require('../Controllers/memberController');
const memberRouter = express.Router();


memberRouter.post('/', createMember);

module.exports = memberRouter;