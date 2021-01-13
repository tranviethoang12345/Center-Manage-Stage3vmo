exports.create = async (model, data) => {
  try {
    return await model.create(data);
  } catch (error) {
    throw error;
  }
}



exports.findLength = async (model, filter) => {
  try {
    return await model.find(filter).countDocuments();
  } catch (error) {
    throw error;
  }
};