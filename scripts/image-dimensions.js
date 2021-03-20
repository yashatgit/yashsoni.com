const sizeOf = require('image-size');
const fs = require('fs');

let codeImports = '';
let codeUsage = '';
let code = '';

const photoExtensions = new Set(['jpg', 'png', 'gif']);
const videoExtensions = new Set(['mp4', 'MP4', 'mov']);

const getImageDimensions = (folderPath = '') => {
  const folderFullPath = folderPath || `pages/blog/building-a-personal-assistant-powered-by-ai-vision/media`;

  fs.readdir(folderFullPath, (err, files) => {
    const imageList = files.forEach(fileName => {
      const [abosoluteFileName, extension] = fileName.split('.');
      const isPhoto = photoExtensions.has(extension);
      const isVideo = videoExtensions.has(extension);

      // console.log({ isPhoto, isVideo, extension });
      if (!isVideo && !isPhoto) {
        return null;
      }

      // if()
      codeImports += `
        import ${abosoluteFileName} from './media/${fileName}'`;

      if (isPhoto) {
        const filePath = `${folderFullPath}/${fileName}`;
        const dimensions = sizeOf(filePath);
        codeUsage += `
        <MediaGrid caption="" photos={[{src: ${abosoluteFileName}, width: ${dimensions.width},height: ${dimensions.height}}]}/>`;
      } else if (isVideo) {
        codeUsage += `
        <video poster="" src="${abosoluteFileName}" muted controls width="100%" muted></video>`;
      }
    });
    code = `
    ${codeImports}

    ${codeUsage}`;
    console.log(code);
  });
};
const [, , folderPath] = process.argv;
getImageDimensions(folderPath);
