exports.create = async (model, data) => {
  try {
    return await model.create(data);
  } catch (error) {
    throw error;
  }
}

exports.getOne = async (model, filter, projection = '', populate) => {
  try {
    return await model.findOne(filter, projection).populate(populate);
  } catch (error) {
    throw error;
  }
}

exports.getLength = async (model, filter) => {
  try {
    return await model.find(filter).countDocuments();
  } catch (error) {
    throw error;
  }
};