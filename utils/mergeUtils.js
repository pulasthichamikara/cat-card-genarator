const { writeFile } = require('fs');
const { join } = require('path');
const mergeImg = require('merge-img');
const { WIDTH } = require('./constants');

function mergeImages(firstBody, secondBody) {
  mergeImg([
    { src: Buffer.from(firstBody, 'binary'), x: 0, y: 0 },
    { src: Buffer.from(secondBody, 'binary'), x: WIDTH, y: 0 },
  ]).then((img) => {
    img.getBuffer('image/jpeg', (err, buffer) => {
      if (err) {
        console.log(err);
      }

      const fileOut = join(process.cwd(), `/cat-card.jpg`);
      writeFile(fileOut, buffer, 'binary', (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('The file was saved!');
      });
    });
  });
}

module.exports = {
  mergeImages,
};
