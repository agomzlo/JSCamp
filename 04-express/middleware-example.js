import express from 'express';

process.loadEnvFile();

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware for all routes
app.use((request, response, next) => {
    console.log('Global middleware');
    next();
});

// Middleware only for home route
const homeMiddleware = (request, response, next) => {
    console.log('Home middleware');
    next();
};

// Global and Home middleware will be executed for this route
app.get('/', homeMiddleware, (request, response) => {
  response.send('Hello World!');
});

// Only Global middleware will be executed for this route
app.get('/health', (request, response) => {
    response.json({
        status: 'OK',
        uptime: process.uptime()
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});