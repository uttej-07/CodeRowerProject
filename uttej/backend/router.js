const router = require("express").Router();
const {
  createConfiguration,
  getConfigurationOne,
  updateConfiguration,
  getConfiguration,
} = require("./controllers/Configuration");
router.get("/configuration/:id", getConfigurationOne);
router.get("/configuration", getConfiguration);
router.post("/configuration", createConfiguration);
router.put("/configuration/:id", updateConfiguration);

module.exports = router;
