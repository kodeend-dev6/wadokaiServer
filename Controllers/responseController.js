const errorResponse = async (
    res,
    { statusCode = 500, message = "Internal server error", stack }
  ) => {
    return res.status(statusCode).json({
      success: false,
      message: message,
      stack: stack || undefined,
    });
  };
  
  const successResponse = async (
    res,
    { statusCode = 200, message, meta, stack, data }
  ) => {
    return res.status(statusCode).json({
      success: true,
      message: message || undefined,
      meta: meta || undefined,
      stack: stack || undefined,
      data: data || undefined,
    });
  };
  
  module.exports = { errorResponse, successResponse };
  