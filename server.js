import fastify from 'fastify';
import fastifyAxios from 'fastify-axios';
import sensible from 'fastify-sensible';
import { config as dotenvConfig } from 'dotenv';
import walletRoutes from './src/routes/wallet/index.js';

dotenvConfig();
const fastifyServer = fastify({ logger: true });

fastifyServer.register(fastifyAxios);
fastifyServer.register(walletRoutes);
fastifyServer.register(sensible);


const start = async () => {
    try {
        await fastifyServer.listen({ port: 3000, host: '0.0.0.0' });
    } catch (err) {
        process.exit(1);
    }
};

start();