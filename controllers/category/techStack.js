// // 3. Tech Stack
// Create
exports.createTechStack = async(req, res) => {
  try {
    let body = req.body;
    let create = await categoryModel.techStack.create(body);
    res.json(create);
  } catch (error) {
    console.log(error);
  }
};

// Get 1
exports.getOneTechStack = async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
}

// Update
exports.updateTechStack = async(req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let update = await categoryModel.techStack.findByIdAndUpdate({_id: id}, body, {new: true});
    res.json(update)
  } catch (error) {
    console.log(error);
  }
}

// Delete
exports.deleteTechStack = async(req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await categoryModel.techStack.deleteOne({_id: id})
  } catch (error) {
    console.log(error);
  }
}