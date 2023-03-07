const Cost = require("../models/cost");

const getCosts = async () => {
  const costs = await Cost.find();
  
  return costs;
}

const createCost = async (article, amount) => {
  const newCost = new Cost({article, amount });
  const savedCost = await newCost.save();

  return savedCost;
}

const deleteCost = async (id) => {
  const deleteInfo = await Cost.deleteOne({ _id: id });

  return deleteInfo;
}

const editCost = async (id, article, amount) => {
  const updatedCost = await Cost.findByIdAndUpdate(
    { _id: id },
    { article, amount },
    { new: true }
  );
  
  return updatedCost;
}

module.exports = {
  getCosts,
  createCost,
  deleteCost,
  editCost
}