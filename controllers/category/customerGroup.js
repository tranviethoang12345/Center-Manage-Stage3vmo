// // 4. Customer Group
// Create
exports.createCustomerGroup = async(req, res) => {
  try {
    let body = req.body;
    let create = await categoryModel.customerGroup.create(body);
    console.log(create);
    return res.status(200).json({
      message: 'Create Customer Group successful',
      messageCode: 'CREATE_CUSTOMER_GROUP_SUCCESSFUL',
      data: create,
      status: 200
    })
  } catch (error) {
    // console.log(error);
    res.json(error);
  }
}

// Get 1
exports.getOneCustomerGroup = async(req, res) => {
  try {
    let id = req.params.id;
    let getOne = await categoryModel.customerGroup.findOne({_id: id})
    res.status(200).json({
      message: 'Get One Customer Group successful',
      messageCode: 'GET_ONE_CUSTOMER_GROUP_SUCCESSFUL',
      data: getOne,
      status: 200
    });
  } catch (error) {
    // console.log(error);
    res.json(error);
  }
}

// Update
exports.updateCustomerGroup = async(req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let update = await categoryModel.customerGroup.findByIdAndUpdate({_id: id}, body, {new: true});
    res.status(200).json({
      message: 'Update Customer Group successful', 
      messageCode: 'UPDATE_CUSTOMER_GROUP_SUCCESSFUL',
      data: update,
      status: 200 
      });
  } catch (error) {
    // console.log(error);
    res.json(error);
  }
}

// Delete
exports.deleteCustomerGroup = async(req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await categoryModel.customerGroup.deleteOne({_id: id});
    res.status(200).json({
      message: 'Delete Customer Group successful',
      messageCode: 'DELETE_CUSTOMER_GROUP_SUCCESSFUL',
      data: deleteData,
      status: 200
    });
  } catch (error) {
    // console.log(error);
    res.json(error);
  }
}