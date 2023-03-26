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