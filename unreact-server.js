import http from "http" 
import fs from "fs"
import path from "path"

const config = JSON.parse(fs.readFileSync('unreact.json', 'utf8'));
const folderPath = config.src;

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

const server = http.createServer(async (req, res) => {
    let requestedFile = req.url === '/' ? 'index.html' : req.url;
    
    let filePath = path.join(folderPath, requestedFile);
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
	    
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>', 'utf8');
        } else {
            sendFile(requestedFile, req, res);
        }
    });
})

server.listen(3000, () => {
    console.log("server running on: http://localhost:3000")
})
