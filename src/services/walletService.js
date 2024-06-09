import axios from 'axios';
import { getTotalSumOfWallet } from '../utils/helperFuctions.js';

const BASE_URL = 'https://api.covalenthq.com/v1';

const getWalletAssets = async (request, reply) => {
    try {
        const { address } = request.params;
        const chainId = '1';    
      
        const response = await axios.get(`${BASE_URL}/${chainId}/address/${address}/balances_v2/`, {
            params: { key: process.env.COVALENT_API_KEY }
        });
        reply.send(response.data.data);
    } catch (error) {
        reply.status(500).send({ error: error.message });
    }
}


const getWalletValue = async (request, reply) => {
    try {
        const { address } = request.params;
        const chainId = '1';

        const response = await axios.get(`${BASE_URL}/${chainId}/address/${address}/balances_v2/`, {
            params: { key: process.env.COVALENT_API_KEY }
        });
        reply.send(getTotalSumOfWallet(response.data.data));
    } catch (error) {
        reply.status(500).send({ error: 'Failed to fetch wallet value.' });
    }
}


const getWalletTransactions = async (request, reply) => {
    try {
        const { address } = request.params;
        const { page = 1 } = request.query;
        const chainId = '1'; 
    
        const response = await axios.get(`${BASE_URL}/${chainId}/address/${address}/transactions_v3/`, {
            params: {
                'page-number': page,
                'key': process.env.COVALENT_API_KEY
            }
        });
        reply.send(response.data);
    } catch (error) {
        reply.status(500).send({ error: 'Failed to fetch transactions.' });
    }

}

export { getWalletAssets, getWalletValue, getWalletTransactions }