//Import
const projectStatusService =  require('../../service/category/projectStatus')

// // 2. States Project
// Create
exports.createProjectStatus = async (req, res) => {
  try {
    var body = req.body;
    let create = await projectStatusService.createOne(body);
    res.status(200).json({
      message: 'Create Status Project successful',
      messageCode: 'CREATE_STATUS_PROJECT_SUCCESSFUL',
      data: create,
      status: 200
    })
  } catch (error) {
    if(error.code == 11000)
    {
    res.json(body.name + ' name has been create');
    }
  }
};

// Get All
exports.getAllProjectStatus = async (req, res) => {
  try {
    let getAll = await projectStatusService.getAll();
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
exports.getOneProjectStatus = async (req, res) => {
  try {
    let id = req.params.id;
    let getOne = await projectStatusService.getOne(id);
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
exports.updateProjectStatus = async (req, res) => {
  try {
    let id = req.params.id;
    let body =  req.body;
    let update = await projectStatusService.updateOne(id, body);
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
exports.deleteProjectStatus = async (req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await projectStatusService.deleteOne(id);
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