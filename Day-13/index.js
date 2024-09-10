function counter(n) {
  let count = 1;
  const a = setInterval(() => {
    console.log(count++);

    if (count > n) {
      clearInterval(a);
      console.log('Times Up🥳');
    }
  }, 1000);
}

// counter(4);

function timerWithoutSetTimer() {
  let count = 1;

  function timer() {
    console.log(count++);
    setTimeout(timer, 1000);
  }

  timer();
}

// timerWithoutSetTimer();

function readingAFile() {
  const fs = require('fs');

  fs.readFile('a.txt', 'utf8', (err, data) => {
    if (err) {
      console.log('Error reading a.txt:', err);
      return;
    }
    console.log(data);
  });
}

// readingAFile();

function editFile() {
  const fs = require('fs');
  const data = '\nThis is the added data in a.txt';
  fs.appendFile('a.txt', data, 'utf8', (err) => {
    if (err) {
      console.log('Error writing file in a.txt', err);
    }
    console.log('successfully updated file');
  });
}

// editFile();
// readingAFile();

function fileCleaner() {
  const fs = require('fs');
  let data = '';

  function readingFromAFile() {
    return new Promise((resolve, reject) => {
      fs.readFile('a.txt', 'utf8', (err, fileData) => {
        if (err) {
          console.log('There is an error while reading data from a.txt', err);
          reject();
        }

        data = removeSpaces(fileData);
        resolve(data);
      });
    });
  }

  async function writingFile() {
    const data = await readingFromAFile();
    try {
      fs.writeFile('a.txt', data, 'utf8', (err) => {
        if (err) {
          console.log('Error in writing to a.txt', cl);
        }

        console.log(`Data successfully wrote`);
        readingAFile();
      });
    } catch (error) {
      console.log('there is some error in writing the file', error);
    }
  }

  writingFile();
}

function removeSpaces(str) {
  str = str.trim();
  const arr = str
    .split(' ')
    .filter((word) => word !== '')
    .join(' ');

  return arr;
}
readingAFile();
fileCleaner();
// readingAFile();
