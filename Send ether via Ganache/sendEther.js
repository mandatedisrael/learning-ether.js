const ethers = require('ethers');

async function main(){
    //Ganache rpc 
    const url = "HTTP://127.0.0.1:7545";
  
    const provider = new ethers.providers.JsonRpcProvider(url);
  
    const privateKey = "7712e6ad4235614de2b09ec92279ea5810e8e322309c3bf4f9b3e107f3d96449"; //no security issues, just a ganache localaccount
    const wallet = new ethers.Wallet(privateKey, provider);
    
    const signer1 = provider.getSigner(1);
}
