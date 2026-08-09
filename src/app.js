'use strict';

const fs = require('fs');

const source = process.argv[2];
const destination = process.argv[3];

if (!source || !destination) {
  console.error('Source and destination are required');
} else if (source !== destination) {
  try {
    fs.copyFileSync(source, destination);
  } catch (error) {
    console.error(error.message);
  }
}
