const express = require('express');
const algoliasearch = require('algoliasearch');
const fs = require('fs');
require('dotenv').config();

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
app.get('/update-camera-price', async (req, res) => {
  try {
    const rawData = readFileSync('./data/products.json');
    const records = JSON.parse(rawData);

    // Reduce prices of cameras
    const updatedRecords = records.map((record) => {
      // CLIENT NOTE: We excluded camera accessories and anything camcorder related from receiving the 20% discount.
      // To include camcorders and accessories, remove the below if statement and uncomment the following if statement from lines 28-32:

      // if (record.categories.includes('Cameras & Camcorders')) {
      //    record.price = Math.floor(record.price * 0.8);
      //  }
      //  return record;
      // });

      if (
        record.categories.includes('Cameras & Camcorders') &&
        !record.categories.some((category) =>
          category.includes('Accessories')
        ) &&
        !record.hierarchicalCategories.lvl1.includes(
          'Cameras & Camcorders > Camcorders'
        )
      ) {
        record.price = Math.floor(record.price * 0.8);
      }
      return record;
    });

    // Save updatedRecords to Algolia
    await index.saveObjects(updatedRecords).then(({ objectIDs }) => {
      // console.log('Saved object IDs:', objectIDs);
    });

    res.json({ message: 'Data updated successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred while processing the data');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
