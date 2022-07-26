const ethers = require('ethers');

async function main() {
    //Ganache rpc 
    const url = "HTTP://127.0.0.1:7545";
  
    const provider = new ethers.providers.JsonRpcProvider(url);
  
    const privateKey = "16bb9b14c80d35ba7b8bf0909e6071aaf23ff68fdf8308ff01bf969b1da9834e"; //no security issues, just a ganache localaccount
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
