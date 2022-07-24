const ethers = require('ethers');
const { Wallet, utils } = ethers;
const { wallet1 } = require('./wallets');


const signaturePromise = wallet1.signTransaction({
    value: utils.parseUnits('1','ether'), /* To send 1 ether*/
    to:" ", /* supply address as string*/
    gasLimit: 21000,/* You can increase, excess will be refunded*/ 
    gasPrice: utils.parseUnits('1', 'gwei')
});

module.exports = signaturePromise;
