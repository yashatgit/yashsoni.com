const sizeOf = require('image-size');
const fs = require('fs');

const getImageDimensions = folderName => {
  const folderFullPath = `public/static/images/${folderName}`;
  fs.readdir(folderFullPath, (err, files) => {
    const imageList = files.map(file => {
      const filePath = `${folderFullPath}/${file}`;
      const dimensions = sizeOf(filePath);
      const imageObject = { src: filePath.replace('public/', '/'), width: dimensions.width, height: dimensions.height };
      return imageObject;
    });
    console.log(imageList);
  });
};
const [, , folderName] = process.argv;
getImageDimensions(folderName);
