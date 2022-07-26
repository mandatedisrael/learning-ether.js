const ethers = require('ethers');
const dotenv  = require('dotenv').config({path: 'C://Users//hybri//web3 projects//learning-ether.js//.env'});

async function main() {
    //Ganache rpc 
    const url = process.env.RPC_URL;
  
    const provider = new ethers.providers.JsonRpcProvider(url);
  
    const privateKey = process.env.PRIVATE_KEY; //no security issues, just a ganache localaccount
    const wallet = new ethers.Wallet(privateKey, provider);
    
    const signer1 = provider.getSigner(1);
    const addr1 = await signer1.getAddress();
    const walletBalance = await wallet.getBalance();

    console.log("Balance of sender address before txn: "+ ethers.utils.formatEther(walletBalance));
    console.log("Sending ether from "+ wallet.address+ " to "+ addr1);

    const txn =  await wallet.sendTransaction({
        to: addr1,
        value: ethers.utils.parseEther("50"),
    });

    const receipt  = await txn.wait();
    const balanceAfter = await wallet.getBalance();
    console.log("Balance of sender address after the txn: "+ ethers.utils.formatEther(balanceAfter)); //parseEther for BigNumber rep while formatEther for string rep

}

main()
.then(() => process.exit(0))
.catch(error => {
    console.log(error);
    process.exit(1);
});
