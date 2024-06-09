import { getWalletAssets, getWalletTransactions, getWalletValue } from "../../services/walletService.js";

const walletRoutes = async(fastify, options) => {
    fastify.get('/wallet/:address/assets', getWalletAssets);
    fastify.get('/wallet/:address/value', getWalletValue);
    fastify.get('/wallet/:address/transactions', getWalletTransactions);
}

export default walletRoutes;
