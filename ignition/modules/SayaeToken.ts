import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SYEModule = buildModule("SYEModule", (m) => {
  // Deploy the SYE contract
  const syeToken = m.contract("SYE", []);

  return { syeToken };
});

export default SYEModule;