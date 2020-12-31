// // 2. States Project
// Create
exports.createStatesProject = async(req, res) => {
  try {
    let body = req.body;
    let create = await categoryModel.statesProject.create(body);
    res.json(create);
  } catch (error) {
    console.log(error);
  }
};

// Get 1
exports.getOneStatesProject = async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
};

// Update
exports.updateStatesProject = async(req, res) => {
  try {
    let id = req.params.id;
    let body =  req.body;
    let update = await categoryModel.statesProject.findByIdAndUpdate({_id: id}, body, {new: true});
    res.json(update);
  } catch (error) {
    console.log(error);
  }
};

// Delete
exports.deleteStatesProject = async(req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await categoryModel.statesProject.deleteOne({_id: id});
    res.json(deleteData);
  } catch (error) {
    console.log(error);
  }
};