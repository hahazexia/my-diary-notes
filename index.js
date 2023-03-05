import path from 'path';
import { readdir, rename } from 'node:fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  const notesPath = path.join(__dirname, './notes');
  const files = await readdir(notesPath);
  const arr = {};
  for (const file of files) {
    const temp = file.split('.');
    arr[temp[0]] = `* [${file}](./notes/${file})`;
    // const index = 81 - Number(arr[0]);
    // arr.shift();
    // arr.unshift(index);
    // const name = arr.join('.');
    // await rename(path.join(notesPath, file), path.join(notesPath, name));
    // console.log(`* [${file}](./notes/${file})`)
  }

  const res = Object.keys(arr).reduce((acc, i) => {
    acc.push(arr[i]);
    return acc;
  }, []);

  for (let i = res.length - 1; i >= 0; i--) {
    console.log(res[i]);
  }

} catch (err) {
  console.error(err);
}
