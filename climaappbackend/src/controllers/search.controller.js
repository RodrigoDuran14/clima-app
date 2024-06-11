const SearchModel = require("../models/Search.model");

const postSearch = async (req, res) => {
  try {
    
    const { city } = req.body;
    const search = new SearchModel({ city });
    await search.save();
    res.send(search);
  } catch (error) {
    console.log("error: ", error)
  }
};

const getSearches = async (req, res) => {
  try {
    const searches = await SearchModel.find().sort({ date: -1 });

    console.log("historial: ",searches)
  res.send(searches);
  } catch (error) {
    console.log("error: ", error)
  }
  
};

module.exports = { postSearch, getSearches };
