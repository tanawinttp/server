const Population = require("../Models/Database.js");


exports.read = async (req, res) => {
  try {
    const data = await Population.find({})
      .select("CountryName Year Population")
      .exec();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
