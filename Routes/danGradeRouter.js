const express = require('express');
const { getAlldanGrades, insertDanGrade } = require('../Controllers/danGradeController');
const danGradeRouter = express.Router();


danGradeRouter.get('/', getAlldanGrades);
danGradeRouter.get('/all', insertDanGrade);

module.exports = danGradeRouter;