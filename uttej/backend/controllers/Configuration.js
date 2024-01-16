const Configuration = require("../model/Configuration");

const getConfiguration = async (req, res) => {
  try {
    const st = await Configuration.find();
    res.json(st);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getConfigurationOne = async (req, res) => {
  try {
    const st = await Configuration.findOne({ id: req.params.id });
    if (st) {
      res.json({ data: st });
    } else {
      res.status(404).json({ message: "Data not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const createConfiguration = async (req, res) => {
  try {
    const newCollectionItem = await Configuration.create(req.body);
    res.status(201).json(newCollectionItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateConfiguration = async (req, res) => {
  try {
    const id = req.params.id;
    const { remark } = req.body;
    const updatedCollectionItem = await Configuration.findOneAndUpdate(
      { id },
      { remark },
      { new: true }
    );
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: `Internal server error ${error}` });
  }
};

module.exports = {
  createConfiguration,
  getConfigurationOne,
  updateConfiguration,
  getConfiguration,
};
