const { Wallet, utils, providers } = require('ethers');
const { ganacheProvider, PRIVATE_KEY } = require('./config');

//create a new web3 provider with ganache
const provider = new providers.Web3Provider(ganacheProvider); 

//create a new wallet
const wallet = new Wallet(PRIVATE_KEY);

async function sendEther({ value, to }) {
    const rawTx = await wallet.signTransaction({ 
        value, to, 
        gasLimit: 0x5208,
        gasPrice: 0x3b9aca00 
    });

    //send the transaction and return the transaction promise
    return provider.sendTransaction(rawTx);
}

module.exports = sendEther;

// Only for a single txn since we didnt update the nonce 
