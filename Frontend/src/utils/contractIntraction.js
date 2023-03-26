import { ethers } from "ethers";
import RollVideo from "../contracts/RollVideo.sol/RollVideo.json";

const contractAddress = process.env.REACT_APP_ROLLVIDEO_CONTRACT_ADDRESS

async function requestAccount() {
    return await window.ethereum.request({ method: "eth_requestAccounts" });
}

export async function mintRollVideo(uri) {
    if (typeof window.ethereum !== "undefined") {
        const connectedAddress = await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log(connectedAddress, uri, 'mintRollVideo', contractAddress,  { provider }, signer);
        const contract = new ethers.Contract(contractAddress, RollVideo.abi, signer);
        const transaction = await contract.safeMint(connectedAddress[0], uri);
        const result = await transaction.wait();
        return result;
      }
}

export async function readRollVideos() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        contractAddress,
        RollVideo.abi,
        provider
      );
      console.log("contract", contract);
      try {
        const totalSupply = await contract.totalSupply();
        console.log("totalSupply: ", parseInt(totalSupply.toString()));
        var times = parseInt(totalSupply.toString());
        for(var i = 0; i < times; i++){
            const tokenURI = await contract.tokenURI(parseInt(i));
            console.log("token URL", tokenURI);
        }
      } catch (err) {
        console.log("Error: ", err);
        alert(
          "Switch your MetaMask network to Polygon zkEVM testnet and refresh this page!"
        );
      }
    }
  }