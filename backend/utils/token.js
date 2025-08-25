import jwt from 'jsonwebtoken';


export const signAccessToken = (user) =>
jwt.sign(
{ sub: user._id.toString(), roles: user.roles },
process.env.ACCESS_TOKEN_SECRET,
{ expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || '15m' }
);


export const signRefreshToken = (user) =>
jwt.sign(
{ sub: user._id.toString() },
process.env.REFRESH_TOKEN_SECRET,
{ expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || '7d' }
);