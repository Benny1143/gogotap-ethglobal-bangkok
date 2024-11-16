import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MiniPayModule = buildModule("MiniPayModule", (m) => {
  // Set up parameters if you want to make the contract address configurable
  const initialOwner = m.getParameter(
    "initialOwner",
    "0xD7a5b3546fd19cbF989666203D5296000Cad7888"
  );

  // Deploy the MiniPay contract with the specified parameters
  const miniPayNFT = m.contract("MiniPay", [initialOwner]);

  return { miniPayNFT };
});

export default MiniPayModule;

