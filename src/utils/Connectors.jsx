import { ethers } from "ethers";
import treasuryABI from "./treasury.json";
import governanceABI from "./Governance.json";

export const treasuryAbi = treasuryABI.abi;
export const governanceAbi = governanceABI.abi;

export const treasuryAddress = "0xCD2457ECEe186F37078677320f638278c6A247C6";

export const governanceAddress = "0x17Fa0B06253744eF5DB945C8AF05ABADCF74d425";

export const nftTokenAddress = "0x9182Dd78C7721d26a8778171E8DBD60e9cbF8d44";

export const provider = new ethers.providers.Web3Provider(window.ethereum);

export const url = "https://hidden-dawn-97602.herokuapp.com/api/";

export const signer = provider.getSigner();

export const treasuryContract = new ethers.Contract(treasuryAddress, treasuryABI.abi, signer);

export const governanceContract = new ethers.Contract(governanceAddress, governanceABI.abi, signer);
