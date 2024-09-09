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

export function startUnreactServer(){
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
    server.listen(3000, () => {
	console.log("server running on: http://localhost:3000")
    })
}
