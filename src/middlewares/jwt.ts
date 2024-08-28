import type { Request, Response, NextFunction } from 'express';
import { unauthorizedResponse } from '@/utils/response';
import jwt from 'jsonwebtoken';
import config  from '@/config/setting';

// Bearer token middleware
const bearerTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return unauthorizedResponse(res);
    }

    // Check if the header starts with 'Bearer '
    const token = authHeader.split(' ')[1];
    if (!token) {
        return unauthorizedResponse(res);
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, config.bearer.secret);
        req.currentUser = decoded.sub as string;
        next();
    } catch {
        return unauthorizedResponse(res); 
    }
};

export default bearerTokenMiddleware;