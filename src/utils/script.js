const fs = require('fs');

// File path and content
const filePath = 'example.txt';
const fileContent = 'This is the content added to the file.';

// Write the content to the file
fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log(`File "${filePath}" created and content added.`);
  }
});
