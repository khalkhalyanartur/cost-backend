const express = require("express");
const router = express.Router();
const { validationAddCost, validationEditCost  } = require('../middlwares/cost-validation');
const { 
  getAllCosts,
  createOneCost,
  deleteCostById,
  editCostById,
} = require('../controllers/cost-controllers');

router.get('/costs', getAllCosts);
router.post('/costs', validationAddCost, createOneCost);
router.delete('/costs/:id', deleteCostById);
router.patch('/costs/:id', validationEditCost, editCostById);

module.exports = router;