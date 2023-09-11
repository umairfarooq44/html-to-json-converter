import fs from 'fs';
import htmlToJson from './htmlToJson';

if (process.argv[2]) {
  fs.readFile(process.argv[2], 'utf8', (err, file) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(htmlToJson(file), null, 2));
    }
  });
}

export { htmlToJson };
