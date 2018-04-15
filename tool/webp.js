const path = require('path'),
    imagemin = require('imagemin'),
    imageminWebp = require('imagemin-webp'),
    paths = {
        pngImages: '../src/img/*.png',
        jpegImages: '../src/img/*.jpg',
        dist: '../src/img/webp'
    };

console.log(path.resolve(__dirname, paths.pngImages));
console.log(path.resolve(__dirname, paths.jpegImages));
console.log(path.resolve(__dirname, paths.dist));

imagemin([path.resolve(__dirname, paths.pngImages)], path.resolve(__dirname, paths.dist), {
    use: [
        imageminWebp({
            lossless: true // Losslessly encode images
        })
    ]
}).then(() => {
    console.log('png images optimized');
});

imagemin([path.resolve(__dirname, paths.jpegImages)], path.resolve(__dirname, paths.dist), {
    use: [
        imageminWebp({
            quality: 75 // Quality setting from 0 to 100
        })
    ]
}).then(() => {
    console.log('jpg images optimized');
});
