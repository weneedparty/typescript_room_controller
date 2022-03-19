
// not working, I don't know why
// "dev": "tsc-watch --onSuccess 'ts-node copy_files.ts && node ./dist/index.js'"
import * as fs from 'fs';

const removeDistFolder = () => {
    fs.rmdirSync('./dist');

};

const createDistFolder = () => {
    fs.mkdirSync('./dist');
};

const copyFiles = (files) => {
    files.forEach((file) => {
        fs.copyFileSync(file, `./dist/${file}`);
    });
};

removeDistFolder();
createDistFolder();
copyFiles([
    './livekit.yaml',
]);
