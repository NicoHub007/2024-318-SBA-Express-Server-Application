const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'public', 'images', 'vegetables'); // Replace with your desired directory path
const outputDir = path.join(__dirname, 'public', 'resized-images', 'vegetables'); // Replace with your desired output directory path

// Ensure output directory exists
fs.promises.mkdir(outputDir, { recursive: true })
    .then(() => {
        fs.readdir(imageDir, (err, files) => {
            if (err) {
                console.error('Error reading directory:', err);
                return;
            }

            files.forEach(file => {
                const imagePath = path.join(imageDir, file);
                const outputPath = path.join(outputDir, file);

                sharp(imagePath)
                    .resize(300, 200) // Set desired dimensions
                    .toFile(outputPath, (err) => {
                        if (err) {
                            console.error(`Error resizing ${file}:`, err);
                        } else {
                            console.log(`Resized ${file} to ${outputPath}`);
                        }
                    });
            });
        });
    })
    .catch(err => {
        console.error('Error creating output directory:', err);
    });
