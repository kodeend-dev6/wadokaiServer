const CountryList = require("../Models/countryListModel");
const Member = require("../Models/memberModel");

const createMember = async (req, res, next) => {
  try {
    const { name, designation, image, email, phone, certificate, country } =
      req.body;

    const member = await Member.create({
      name,
      designation,
      image,
      email,
      phone,
      certificate,
      country,
    });

    const countryList = await CountryList.findById(country);
    countryList.member.push(member._id);
    await countryList.save();

    return successResponse(res, {
      message: "Member created successfully",
      statusCode: 201,
      data: member,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createMember };
