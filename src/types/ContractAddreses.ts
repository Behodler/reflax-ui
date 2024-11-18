type address = `0x${string}` | "UNSET";

export interface ContractAddresses {
    USDC: address;
    USDe: address;
    USDx: address;
    Flax: address;
    SFlax: address;
    USDe_USDx_crv: address;
    USDC_USDe_crv: address;
    convexPool: address;
    convexBooster: address;
    vault: address;
    yieldSource: address;
    oracle: address;
    refPair: address; // FLX/Weth
    rewardPairAddress: address; // Crv/Weth
    boosterV1: address;
  }

  const contractKeys = [
    "USDC",
    "USDe",
    "USDx",
    "Flax",
    "SFlax",
    "USDe_USDx_crv",
    "USDC_USDe_crv",
    "convexPool",
    "convexBooster",
    "vault",
    "yieldSource",
    "oracle",
    "refPair",
    "rewardPairAddress",
    "boosterV1",
  ] as const;
  
  const createUnsetContractAddresses = (): ContractAddresses => {
    // Initialize an empty object typed as Partial<ContractAddresses>
    const result: Partial<ContractAddresses> = {};
    
    // Populate the object with "UNSET" for each key
    contractKeys.forEach((key) => {
      result[key] = "UNSET";
    });
  
    // Assert that the result is now a fully populated ContractAddresses
    return result as ContractAddresses;
  };
  
  // Usage
  export const defaultContractAddresses = createUnsetContractAddresses();
  