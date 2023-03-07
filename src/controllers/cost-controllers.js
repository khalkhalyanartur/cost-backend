const {
  getCosts,
  createCost,
  deleteCost,
  editCost
} = require("../services/cost-services");

const getAllCosts = async (req, res) => {
  try {
    const costs = await getCosts();

    res.status(200).send(costs);
  } catch (error) {
    res.status(400).send("Failed to get costs");
  }
};

const createOneCost = async (req, res) => {
  try {
    const { article } = req.body;
    const { amount } = req.body;

    const cost = await createCost(article, amount);
    
    res.status(200).send(cost);
  } catch (error) {
    res.status(400).send("Failed to create one cost");
  }
};

const deleteCostById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteInfo = await deleteCost(id);

    res.status(200).send(deleteInfo);
  } catch (error) {
    res.status(400).send("Failed to delete one cost");
  }
};

const editCostById = async (req, res) => {
  try {
    const {id} = req.params;
    const { article } = req.body;
    const { amount } = req.body;

    const updatedCost = await editCost(id, article, amount);

    res.status(200).send(updatedCost);
  } catch (error) {
    res.status(400).send("Failed to edit text");
  }
}

module.exports = {
  getAllCosts,
  createOneCost,
  deleteCostById,
  editCostById
}
