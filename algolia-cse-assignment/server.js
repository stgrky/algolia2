const express = require("express");
const algoliasearch = require("algoliasearch");
const fs = require("fs");
require("dotenv").config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.ALGOLIA_API_KEY;
const apiId = process.env.ALGOLIA_APP_ID;
const algoliaIndex = process.env.ALGOLIA_INDEX;

// Algolia credentials
const client = algoliasearch(apiId, apiKey);
const index = client.initIndex(algoliaIndex);

// Route to fetch, process, and send data to Algolia
app.get("/update-camera-price", async (req, res) => {
  try {
    const rawData = fs.readFileSync("./data/products.json");
    const records = JSON.parse(rawData);

    //     // Process data - reduce prices of cameras
    const updatedRecords = records.map((record) => {
      //       // CLIENT NOTE: How is 'camera' defined? We excluded accessories and camcorders
      if (
        record.categories.includes("Cameras & Camcorders") &&
        !record.categories.some((category) =>
          category.includes("Accessories")
        ) &&
        //comment out or delete above && and below line from ! to ) in order to include camcorders in the discount
        !record.hierarchicalCategories.lvl1.includes(
          "Cameras & Camcorders > Camcorders"
        )
      ) {
        record.price = Math.floor(record.price * 0.8);
      }
      return record;
    });

    //     // Save processed data to Algolia
    await index.saveObjects(updatedRecords).then(({ objectIDs }) => {
      // console.log('Saved object IDs:', objectIDs);
    });

    res.json({ message: "Data updated successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred while processing the data");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
