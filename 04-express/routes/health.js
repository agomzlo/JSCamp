import {  Router } from 'express';

const healthRouter = Router();

healthRouter.get('/', (request, response) => {
    response.json({
        status: 'OK',
        uptime: process.uptime()
    });
});

export { healthRouter };