import { ethers } from "ethers";
import treasuryABI from "./treasury.json";
import governanceABI from "./Governance.json";
import governTokenABI from "./NFT.json";

export const treasuryAbi = treasuryABI.abi;
export const governanceAbi = governanceABI.abi;
export const nftAbi = governTokenABI.abi;

export const treasuryAddress = "0x3aF185cA7444dBE1a305E618071987Fe8D85Db4F";

export const governanceAddress = "0x14eA1f366cD6c43aEA24354101b62187f26E7Ccd";

export const nftContAddress = "0x7B8Bc476F7f40Dcc634B9872FA4E7Eba93Ce285E";

export const provider = new ethers.providers.Web3Provider(window.ethereum);


export const url = "https://hidden-dawn-97602.herokuapp.com/api/";

export const signer = provider.getSigner();

export const treasuryContract = new ethers.Contract(treasuryAddress, treasuryABI.abi, signer);

export const governanceContract = new ethers.Contract(governanceAddress, governanceABI.abi, signer);

export const nftContract = new ethers.Contract(nftContAddress, nftAbi, signer);
