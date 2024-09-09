import http from "http" 
import fs from "fs"
import path from "path"
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = JSON.parse(fs.readFileSync('unreact.json', 'utf8'));
export const folderPath = config.src;
const frameworkFolderPath = path.join(__dirname, 'core');

export function setupUnreactDirectory() {
    const unreactPath = path.join(process.cwd(), '.unreact');

    const frameworkFiles = ['unreact-core.js', 'unreact.js'];
    const frameworkSourcePath = path.join(__dirname, 'core'); // Pasta do framework

    if (!fs.existsSync(unreactPath)) {

        fs.mkdirSync(unreactPath);
        console.log('.unreact directory created.');
    }

    frameworkFiles.forEach(file => {
        const destPath = path.join(unreactPath, file);
        const srcPath = path.join(frameworkSourcePath, file);

        if (!fs.existsSync(destPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${file} to .unreact directory.`);
        }
    });

    console.log('Framework files are present in .unreact directory.');
}

export function copyUserCodeToUnreact(userCodePath) {
    const unreactPath = path.join(process.cwd(), '.unreact');
    
    if (!fs.existsSync(userCodePath)) {
        console.log('Source directory does not exist:', userCodePath);
        return;
    }
    
    const userFiles = fs.readdirSync(userCodePath);
    
    userFiles.forEach(file => {
        const srcPath = path.join(userCodePath, file);
        const destPath = path.join(unreactPath, file);

        if (!fs.existsSync(destPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied user file ${file} to .unreact.`);
        }
    });

    console.log('User code copied to .unreact.');
}
