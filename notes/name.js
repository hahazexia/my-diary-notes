import fs from 'fs';
import path from 'path';

fs.readdir(process.cwd(), (err, files) => {
  files.forEach(item => {
    fs.rename(
      path.join(process.cwd(), item),
      path.join(process.cwd(), item.replace(/:/g, '-')),
      err => {
        if (err) throw err
        console.log(`${item} & prefix_${item}`)
      }
    )
  });
});
