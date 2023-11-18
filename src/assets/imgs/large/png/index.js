
const largeImages = {};

const importAll = (context) => {
  context.keys().forEach((key) => {
    const imageName = key.replace('./', '').replace('.png', '');
    largeImages[imageName] = context(key);
  });
};

importAll(require.context('../png', false, /\.png$/));
export default largeImages;

