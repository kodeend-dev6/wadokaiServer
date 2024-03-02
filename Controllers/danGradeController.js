const DanGrade = require("../Models/danGradeModel");
const data = require("../data");
const { successResponse } = require("./responseController");

const getAlldanGrades = async (req, res, next) => {
  try {
    const page = parseInt(req?.query?.page) || 1;
    const limit = parseInt(req?.query?.limit) || 10;
    const skip = (page - 1) * limit;
    const search = req?.query?.search || "";

    const searchRegExp = new RegExp(".*" + search + ".*", "i");

    const filter = {
      $or: [
        { DAN: searchRegExp },
        { NAME: searchRegExp },
        { COUNTRY: searchRegExp },
        { INSTRUCTOR: searchRegExp },
      ],
    };

    const danGrades = await DanGrade.find(filter)
      .limit(limit)
      .skip(skip)
      .sort({ createdAt: -1 });

    const count = await DanGrade.countDocuments(filter);

    return successResponse(res, {
      message: "Dan Grades retrieved successfully",
      statusCode: 200,
      meta: {
        totalPages: Math.ceil(count / limit),
        currentPage: page,
        totalResults: count,
      },
      data: danGrades,
    });
  } catch (error) {
    next(error);
  }
};

const insertDanGrade = async (req, res, next) => {
  try {
    await DanGrade.deleteMany({});

    const danGrade = await DanGrade.insertMany(data.danGrades);
    return successResponse(res, {
      message: "Dan Grade inserted successfully",
      statusCode: 201,
      data: danGrade,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAlldanGrades, insertDanGrade };
