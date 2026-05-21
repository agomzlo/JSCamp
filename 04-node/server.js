import { createServer } from 'node:http';
import { randomUUID } from 'node:crypto';
import { json } from 'node:stream/consumers';

process.loadEnvFile();

const port = process.env.PORT ?? 3000;

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
]

function sendJson(res, status, data){
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(data));
}

const server = createServer(async (req, res) => {
    const { method, url } = req;

    const [ pathName, queryString ] = url.split('?');
    const searchParams = new URLSearchParams(queryString);

    if (method === 'GET') {
        if (pathName === '/') {
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            return res.end('Hello, World! 🔥');
        }
    
        if (pathName === '/health') {
            return sendJson(res, 200, { status: 'ok', uptime: process.uptime() });
        }

        if (pathName === '/users') {
            if (
                Number.isNaN(Number(searchParams.get('limit'))) ||
                Number.isNaN(Number(searchParams.get('offset')))
            ) {
                return sendJson(res, 400, { error: 'Invalid limit or offset' });
            }

            const limit = Number(searchParams.get('limit')) || users.length;
            const offset = Number(searchParams.get('offset')) || 0;

            const filteredUsers = users.slice(offset, offset + limit);

            return sendJson(res, 200, filteredUsers);
        }
    }

    if (method === 'POST') {
        if (pathName === '/create-user') {
            const body = await json(req);

            if (!body || !body.name) {
                return sendJson(res, 400, { error: 'Name is required' });
            }

            const newUser = { 
                id: randomUUID(), 
                name: body.name 
            };

            users.push(newUser);

            return sendJson(res, 201, { message: 'User created successfully' });
        }
    }


    return sendJson(res, 404, { error: 'Not Found' });
});

server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});