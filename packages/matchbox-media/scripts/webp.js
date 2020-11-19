const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
  const files = await imagemin(['cropped/*.{jpg,png}'], {
    destination: 'webp',
    plugins: [
      imageminWebp({
        quality: 100,
      }),
    ],
  });

  console.log(files);
})();
