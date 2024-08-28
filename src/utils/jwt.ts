import jwt from 'jsonwebtoken';
import config  from '@/config/setting';

const createToken = (identity: string) => {
    const payload = {
        sub: identity
    }
    const token = jwt.sign(payload, config.bearer.secret, { expiresIn: config.bearer.expiresIn });
    return token
}

export { createToken }