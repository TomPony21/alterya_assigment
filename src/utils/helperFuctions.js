export const getTotalSumOfWallet = (wallet) =>{
    let totalWalletValue  = 0;
    wallet.items.forEach(item => totalWalletValue += item.quote)
    return parseFloat(totalWalletValue).toFixed(2);
};