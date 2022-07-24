const ethers = require('ethers');
const { Wallet } = ethers;

// create a wallet with a private key
const wallet1 = new Wallet(/* Insert your private key here as a string */);

// create a wallet from seedphrace
const wallet2 = Wallet.fromMnemonic(/*insert seed phrase/mnemonics here */ );

module.exports = {
    wallet1,
    wallet2,
}
