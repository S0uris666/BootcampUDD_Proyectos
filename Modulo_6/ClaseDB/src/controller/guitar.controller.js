const Guitar = require("../models/guitar");

exports.getGuitars = async (req, res) => {
    
  try {
    const guitars = await Guitar.find({});
    return res.status(200).json({ guitars });
  } catch (error) {
    console.error("Error fetching guitars:", error);
    res.status(500).json({ message: "Server error" });
  }
}

exports.createGuitar = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newGuitar = await Guitar.create({ name, price });
    if (!newGuitar) {
      return res.status(400).json({ message: "Invalid guitar data" });
    }
    return res.status(201).json({ datos: newGuitar });
  } catch (error) {
    console.error("Error creating guitar:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateGuitarById = async (req, res) => {
    
  try {
    const { name, price } = req.body;
    const updatedGuitar = await Guitar.findByIdAndUpdate(
      req.params.id,
      { name, price },
      { new: true, runValidators: true }
    );
    if (!updatedGuitar) {
      return res.status(404).json({ message: "Guitar not found" });
    }
    return res.status(200).json({ datos: updatedGuitar });
  } catch (error) {
    console.error("Error updating guitar:", error);
    res.status(500).json({ message: "Server error" });
  }
}

exports.deleteGuitarById = async (req, res) => {
    
  try {
    const deletedGuitar = await Guitar.findByIdAndDelete(req.params.id);
    if (!deletedGuitar) {
      return res.status(404).json({ message: "Guitar not found" });
    }
    return res.status(200).json({ message: "Guitar deleted" });
  } catch (error) {
    console.error("Error deleting guitar:", error);
    res.status(500).json({ message: "Server error" });
  }
}