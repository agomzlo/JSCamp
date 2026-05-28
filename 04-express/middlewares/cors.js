import cors from 'cors';

const ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:1234'
]

export const corsMiddleware = ({ allowedOrigins = ALLOWED_ORIGINS } = {}) => {
    return cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }
            return callback(new Error('Not allowed by CORS'));
        }
    });
};