const http = require('http');
const url = require('url');

function parseBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => resolve(body)); 
        req.on('error', err => reject(err)); 
    });
}

const server = http.createServer(async (req, res) => {
    const parsed = url.parse(req.url, true);
    const pathname = parsed.pathname;

    res.setHeader('Content-Type', 'application/json'); 

    if (pathname === '/' || pathname === '') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Welcome to the Home page!' }));

    } else if (pathname === "/api/v1/users") {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: "API v1 User List" }));

    }
  
    else if (pathname.startsWith('/posts')) {
        const segments = pathname.split('/');
        const postId = segments[2];
        if (postId) {
            res.end(JSON.stringify({ message: `Post ${postId}` }))
        } else {
            res.end(JSON.stringify({ message: 'All Posts' }))
        }
    }
    
    else if (req.method === 'POST') {
        const body = await parseBody(req);
        res.statusCode = 201;
        res.end(JSON.stringify({ message: 'POST received!', body }));

    } else if (req.method === 'PUT') {
        const body = await parseBody(req);
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'PUT received!', body }));

    } else if (req.method === 'DELETE') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'DELETE received!' }));

    } 
   
    else {
        res.statusCode = 405;
        res.end(JSON.stringify({ error: 'Method not allowed or route not found' }))
    }
});


server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
