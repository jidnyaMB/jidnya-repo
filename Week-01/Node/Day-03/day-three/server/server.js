// const http = require('http');
// const url = require('url');

// // utility for parsing body
// function parseBody(req) {
//     return new Promise((resolve, reject) => {
//         let body = '';
//         req.on('data', chunk => body += chunk);
//         req.on('end', () => resolve(body)); 
//         req.on('error', err => reject(err)); 
//     });
// }

// const server = http.createServer(async (req, res) => {
//     const parsed = url.parse(req.url, true);
//     const pathname = parsed.pathname;

//     res.setHeader('Content-Type', 'application/json'); // default
    
//     if (req.method === 'GET') {
//         res.statusCode = 200;
//         res.end(JSON.stringify({ message: 'GET received!', query: parsed.query }));

//     } else if (req.method === 'POST') {
//         const body = await parseBody(req);
//         res.statusCode = 201;
//         res.end(JSON.stringify({ message: 'POST received!', body }));

//     } else if (req.method === 'PUT') {
//         const body = await parseBody(req);
//         res.statusCode = 200;
//         res.end(JSON.stringify({ message: 'PUT received!', body }));

//     } else if (req.method === 'DELETE') {
//         res.statusCode = 200;
//         res.end(JSON.stringify({ message: 'DELETE received!' }));

//     } else {
//         res.statusCode = 405;
//         res.end(JSON.stringify({ error: 'Method not allowed' }))
//     }
// });

// // Start the server
// server.listen(3000, () => {
//     console.log('Server listening on port 3000');
// });


const http = require('http');
const url = require('url');

// utility for parsing body
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

    res.setHeader('Content-Type', 'application/json'); // Default to json

    // 1️⃣ Static route (/ or /api/v1/users)
    if (pathname === '/' || pathname === '') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Welcome to the Home page!' }));

    } else if (pathname === "/api/v1/users") {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: "API v1 User List" }));

    }
    // 2️⃣ Dynamic (/users/:id)
    else if (pathname.startsWith('/users/')) {
        const segments = pathname.split('/');
        const userId = segments[2];
        if (isNaN(Number(userId))) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Invalid User ID; must be a number' }))
        } else {
            res.statusCode = 200;
            res.end(JSON.stringify({ message: `User Profile for ID ${userId}` }))
        }
    }
    // 3️⃣ Optional (/posts/:id?) 
    else if (pathname.startsWith('/posts')) {
        const segments = pathname.split('/');
        const postId = segments[2];
        if (postId) {
            res.end(JSON.stringify({ message: `Post ${postId}` }))
        } else {
            res.end(JSON.stringify({ message: 'All Posts' }))
        }
    }
    // 4️⃣ Wildcard (/files/*)
    else if (pathname.startsWith('/files/')) {
        const filePath = pathname.slice(7);
        res.end(JSON.stringify({ message: `Serving file path: ${filePath}` }))
    }
    // 5️⃣ Query (/api/items?id=123&filter=name&page=2)
    else if (pathname === "/api/items") {
        const { id, filter } = parsed.query;
        const page = parseInt(parsed.query.page) || 1;
        const limit = parseInt(parsed.query.limit) || 10;

        res.end(JSON.stringify({ id, filter, page, limit }))
    }
    // 6️⃣ Handle methods (POST, PUT, DELETE) 
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
    // 7️⃣ 405 fallback
    else {
        res.statusCode = 405;
        res.end(JSON.stringify({ error: 'Method not allowed or route not found' }))
    }
});

// Start the server
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
