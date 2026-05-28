import express from 'express';
import { jobsRouter } from './routes/jobs.js';
import { healthRouter } from './routes/health.js';
import { corsMiddleware } from './middlewares/cors.js';

const app = express();

app.use(corsMiddleware());
app.use(express.json());

app.use('/jobs', jobsRouter);
app.use('/health', healthRouter);

if (process.env.NODE_ENV !== 'production') {
    process.loadEnvFile();
    
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export default app;