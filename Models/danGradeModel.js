const { Schema, model } = require("mongoose");

const danGradeSchema = new Schema(
  {
    NAME: {
      type: String,
    },
    DAN: {
      type: String,
    },
    COUNTRY: {
      type: String,
    },
    DATE: {
      type: String,
    },
    INSTRUCTOR: {
      type: String,
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const DanGrade = model("DanGrade", danGradeSchema);
module.exports = DanGrade;
