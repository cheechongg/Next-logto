// libraries/logto.js
import LogtoClient from '@logto/next/edge';

export const config = {
  endpoint: 'https://ptclio.logto.app/',
  appId: 'iu89es4jvaw6nwbmhaak7',
  appSecret: 'ici09yn2gq4io2o10bqi3',
  baseUrl: 'http://localhost:3000', // Change to your own base URL
  cookieSecret: '2d4w7ddvouem1dnhh76dogkbglmnhsuw', // Auto-generated 32 digit secret
  cookieSecure: process.env.NODE_ENV === 'production',
}

export const logtoClient = new LogtoClient(config);
