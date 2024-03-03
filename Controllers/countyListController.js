const CountryList = require("../Models/countryListModel");
const slugify = require("slugify");
const { successResponse } = require("./responseController");
const createError = require("http-errors");

const createCountry = async (req, res, next) => {
  try {
    const { name, flag } = req.body;

    const slug = slugify(name, { lower: true });

    const country = await CountryList.create({ name, slug, flag });
    return successResponse(res, {
      message: "Country created successfully",
      statusCode: 201,
      data: country,
    });
  } catch (error) {
    next(error);
  }
};

const getAllCountries = async (req, res, next) => {
  try {
    const page = parseInt(req?.query?.page) || 1;
    const limit = parseInt(req?.query?.limit) || 25;
    const skip = (page - 1) * limit;

    const countries = await CountryList.find()
      .limit(limit)
      .skip(skip)
      .sort({ createdAt: -1 })
      .populate(
        "member",
        "name designation image email phone certificate country"
      );

    return successResponse(res, {
      message: "Countries retrieved successfully",
      statusCode: 200,
      data: countries,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleCountry = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const country = await CountryList.findOne({ slug }).populate(
      "member",
      "name designation image email phone certificate country"
    );

    if (!country) {
      throw createError(404, "Country not found");
    }

    return successResponse(res, {
      message: "Country retrieved successfully",
      statusCode: 200,
      data: country,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createCountry, getAllCountries, getSingleCountry };
