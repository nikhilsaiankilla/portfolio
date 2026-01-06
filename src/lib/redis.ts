import { createClient } from 'redis';

let redisClient: ReturnType<typeof createClient> | null = null;

export const getRedisInstance = async () => {
    try {
        if (redisClient) return redisClient;

        if (!process.env.REDIS_USER_NAME || !process.env.REDIS_PASSWORD || !process.env.REDIS_HOST) throw new Error('Redis Api Key is missing!!');

        redisClient = createClient({
            username: process?.env?.REDIS_USER_NAME,
            password: process?.env?.REDIS_PASSWORD,
            socket: {
                host: process?.env?.REDIS_HOST,
                port: 13259
            }
        });

        await redisClient.connect();
        return redisClient;
    } catch (error: unknown) {
        console.log(error);
    }
}