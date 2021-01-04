//Import
const serviceProjectStatus =  require('../../service/category/projectStatus')

// // 2. States Project
// Create
exports.createProjectStatus = async(req, res) => {
  try {
    let body = req.body;
    let create = await serviceProjectStatus.createOne(body);
    res.status(200).json({
      message: 'Create Status Project successful',
      messageCode: 'CREATE_STATUS_PROJECT_SUCCESSFUL',
      data: create,
      status: 200
    })
  } catch (error) {
    res.json(error.message);
  }
};

// Get All
exports.getAllProjectStatus = async(req, res) => {
  try {
    let getAll = await serviceProjectStatus.getAll();
    res.status(200).json({
      message: 'Find All Status Project successful',
      messageCode: 'FIND_ALL_STATUS_PROJECT_SUCCESSFUL',
      data: getAll,
      status: 200
    })
  } catch (error) {
    res.json(error.message);
  }
}

// Get 1
exports.getOneProjectStatus = async(req, res) => {
  try {
    let id = req.params.id;
    let getOne = await serviceProjectStatus.getOne(id);
    res.status(200).json({
      message: 'Find Status Project successful',
      messageCode: 'FIND_STATUS_PROJECT_SUCCESSFUL',
      data: getOne,
      status: 200
    })
  } catch (error) {
    res.json(error.message);
  }
};

// Update
exports.updateProjectStatus = async(req, res) => {
  try {
    let id = req.params.id;
    let body =  req.body;
    let update = await serviceProjectStatus.updateOne(id, body);
    res.status(200).json({
      message: 'Update Status Project successful',
      messageCode: 'UPDATE_STATUS_PROJECT_SUCCESSFUL',
      data: update,
      status: 200
    })
  } catch (error) {
    console.log(error);
  }
};

// Delete
exports.deleteProjectStatus = async(req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await serviceProjectStatus.deleteOne(id);
    res.status(200).json({
      message: 'Delete Status Project successful',
      messageCode: 'DELETE_STATUS_PROJECT_SUCCESSFUL',
      data: deleteData,
      status: 200
    })
  } catch (error) {
    console.log(error);
  }
};