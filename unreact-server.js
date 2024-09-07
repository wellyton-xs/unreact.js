#!/usr/bin/env node

import http from "http" 
import fs from "fs"
import path from "path"
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = JSON.parse(fs.readFileSync('unreact.json', 'utf8'));
const folderPath = config.src;
const frameworkFolderPath = path.join(__dirname, 'core');

async function sendFile(fileToSend, req, res){
    let filePath = path.join(folderPath, fileToSend)
    let extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
    case '.js':
	contentType = 'text/javascript';
	break;
    case '.css':
	contentType = 'text/css';
	break;
    case '.json':
	contentType = 'application/json';
	break;
    }
    let fileContent = fs.readFile(filePath, (err, content) => {
	if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>File not found</h1>', 'utf8');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    })
}

function setupUnreactDirectory() {
    const unreactPath = path.join(process.cwd(), '.unreact');

    const frameworkFiles = ['unreact-core.js', 'unreact.js', 'unreact.css'];
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

function copyUserCodeToUnreact(userCodePath) {
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

const server = http.createServer((req, res) => {
    const unreactFolderPath = path.join(process.cwd(), '.unreact');
    const requestedFile = req.url === '/' ? 'index.html' : req.url;

    const filePath = path.join(unreactFolderPath, requestedFile);

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>', 'utf8');
        } else {
            const extname = path.extname(filePath);
            let contentType = 'text/html';

            switch (extname) {
                case '.js':
                    contentType = 'text/javascript';
                    break;
                case '.css':
                    contentType = 'text/css';
                    break;
                case '.json':
                    contentType = 'application/json';
                    break;
                case '.png':
                    contentType = 'image/png';
                    break;
                case '.jpg':
                    contentType = 'image/jpg';
                    break;
            }

            fs.readFile(filePath, (err, content) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Error reading file');
                } else {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(content, 'utf8');
                }
            });
        }
    });
});

setupUnreactDirectory()
copyUserCodeToUnreact(config.src)

server.listen(3000, () => {
    console.log("server running on: http://localhost:3000")
})
