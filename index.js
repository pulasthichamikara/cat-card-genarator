const { fetchImage } = require('./utils/imageFetcher');
const { mergeImages } = require('./utils/mergeUtils');
const { GREETING, WHO } = require('./utils/constants');

async function fetchAndMergeImages() {
  try {
    const firstBody = await fetchImage(GREETING);
    const secondBody = await fetchImage(WHO);
    mergeImages(firstBody, secondBody);
  } catch (error) {
    console.log('error2', error);
  }
}

fetchAndMergeImages();
