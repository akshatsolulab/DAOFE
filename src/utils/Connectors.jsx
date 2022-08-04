import { ethers } from "ethers";
import treasuryABI from "./treasury.json";
import governanceABI from "./Governance.json";
import governTokenABI from "./NFT.json";

export const treasuryAbi = treasuryABI.abi;
export const governanceAbi = governanceABI.abi;
export const nftAbi = governTokenABI.abi;

export const treasuryAddress = "0xbad6540C58B56a49A169C802d114151CFc377DA8";

export const governanceAddress = "0xCb4E78d7193470A15D06eee7D51eEa44C723c0A0";

export const nftContAddress = "0x7FCAf057B328e06602D6D5161f8Dc3AaAde48CEb";

export const provider = new ethers.providers.Web3Provider(window.ethereum);


export const url = "https://hidden-dawn-97602.herokuapp.com/api/";

export const signer = provider.getSigner();

export const treasuryContract = new ethers.Contract(treasuryAddress, treasuryABI.abi, signer);

export const governanceContract = new ethers.Contract(governanceAddress, governanceABI.abi, signer);

export const nftContract = new ethers.Contract(nftContAddress, nftAbi, signer);
