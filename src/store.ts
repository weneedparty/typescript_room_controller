import yaml = require('js-yaml');
import * as fs from 'fs';
import path = require('path');
import { exit } from 'process';

export const apiKeyAndValueObject = {
    apiKey: '',
    apiValue: ''
}

try {
    let the_path = path.join(__dirname, 'livekit.yaml');
    if (!fs.existsSync(the_path)) {
        the_path = path.join(__dirname, '../livekit.yaml');
    }
    const doc = yaml.load(fs.readFileSync(the_path).toString()) as any;
    if (doc?.keys) {
        // console.log(doc.keys);
        // console.log(Object.keys(doc.keys));
        const keys = Object.keys(doc.keys) as string[];
        if (keys.length > 0) {
            apiKeyAndValueObject.apiKey = keys[0];
            apiKeyAndValueObject.apiValue = doc.keys[apiKeyAndValueObject.apiKey];
        }
    }
} catch (e) {
    console.log(e);
}
if (apiKeyAndValueObject.apiKey.length == 0 || apiKeyAndValueObject.apiValue.length == 0) {
    console.log("API key and API value is not found in livekit.yaml!");
    exit(0);
}

// console.log(apiKeyAndValueObject);