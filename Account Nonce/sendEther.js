const { Wallet, utils, providers } = require('ethers');
const { ganacheProvider, PRIVATE_KEY } = require('./config');

// TODO: replace undefined with a new web3 provider
const provider = new providers.Web3Provider(ganacheProvider); 

//convert a wallet to a provider
const wallet = new Wallet(PRIVATE_KEY, provider);


async function sendEther({ value, to }) {
    const rawTx = await wallet.signTransaction({ 
        value, to, 
        gasLimit: 0x5208,
        gasPrice: 0x3b9aca00 
    });

    // send the transaction using the provider wallet which handles the nonce counts and return the transaction promise
    return wallet.sendTransaction();
}

module.exports = sendEther;
